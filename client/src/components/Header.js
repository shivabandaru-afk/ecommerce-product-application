import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>🛍️ EComm Store</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart ({cartCount})
          </Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
