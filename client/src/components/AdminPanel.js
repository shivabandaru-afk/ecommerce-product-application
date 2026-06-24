import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = ({ onLogout }) => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Electronics',
    imageUrl: '',
    stock: ''
  });
  const [imagePreview, setImagePreview] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  const token = localStorage.getItem('adminToken');

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products`);
      setProducts(response.data.data || []);
    } catch (error) {
      setMessage('Error fetching products');
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products`);
      setProducts(response.data.data || []);
    } catch (error) {
      setMessage('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'imageUrl') {
      setImagePreview(value);
    }
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        imageUrl: reader.result
      }));
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (editingId) {
        await axios.put(`${API_URL}/products/${editingId}`, formData, config);
        setMessage('Product updated successfully');
        setEditingId(null);
      } else {
        await axios.post(`${API_URL}/products`, formData, config);
        setMessage('Product added successfully');
      }

      setFormData({
        name: '',
        description: '',
        price: '',
        category: 'Electronics',
        imageUrl: '',
        stock: ''
      });
      setImagePreview('');
      fetchProducts();
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error saving product');
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setImagePreview(product.imageUrl || '');
    setEditingId(product._id);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        setLoading(true);
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        await axios.delete(`${API_URL}/products/${id}`, config);
        setMessage('Product deleted successfully');
        fetchProducts();
      } catch (error) {
        setMessage('Error deleting product');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>

      {message && <div className="message">{message}</div>}

      <div className="admin-content">
        <div className="form-section">
          <h2>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
          <form onSubmit={handleAddProduct}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleInputChange}>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Books</option>
                  <option>Home</option>
                  <option>Sports</option>
                  <option>Toys</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageFileChange}
              />
            </div>

            {imagePreview && (
              <div className="image-preview">
                <label>Preview</label>
                <img src={imagePreview} alt="Preview" />
              </div>
            )}

            <button type="submit" disabled={loading} className="submit-btn">
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormData({
                    name: '',
                    description: '',
                    price: '',
                    category: 'Electronics',
                    imageUrl: '',
                    stock: ''
                  });
                }}
                className="cancel-btn"
              >
                Cancel
              </button>
            )}
          </form>
        </div>

        <div className="products-section">
          <h2>Manage Products ({products.length})</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="products-table">
              <div className="table-header">
                <div className="col-name">Name</div>
                <div className="col-price">Price</div>
                <div className="col-stock">Stock</div>
                <div className="col-category">Category</div>
                <div className="col-actions">Actions</div>
              </div>
              {products.map(product => (
                <div key={product._id} className="table-row">
                  <div className="col-name">{product.name}</div>
                  <div className="col-price">${product.price.toFixed(2)}</div>
                  <div className="col-stock">{product.stock}</div>
                  <div className="col-category">{product.category}</div>
                  <div className="col-actions">
                    <button onClick={() => handleEditProduct(product)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDeleteProduct(product._id)} className="delete-btn">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
