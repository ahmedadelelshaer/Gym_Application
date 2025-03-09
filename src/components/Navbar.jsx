import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

const NavBar = (props) => {
  const cartContext = useContext(CartContext);
  const cart = cartContext ? cartContext.cart : [];
  const styles = { color: props.textColor };

  return (
    <div className='Navbar'>
      <img className="logo" src={logo}></img>
      <ul className='nav-home-menu'>
        <Link style={styles} to="/Home" className='nav-home-link'>Home</Link>
        <Link style={styles} to="/start" className='nav-home-link'>About</Link>
        <Link style={styles} to="/shop" className='nav-home-link'>Shop</Link>
        <Link style={styles} to="/BMI_Calculator" className='nav-home-link'>BMI Calculator</Link>
        <Link style={styles} to="/exercises" className='nav-home-link'>Exercises</Link>
      </ul>
      <div style={styles} className='nan-icon-menu'>
        <button className="nav-icon">
          <i style={styles} className="fas fa-search"></i>
        </button>
        {cartContext && (
          <Link style={styles} to="/carts" className='nav-home-link'>
            <i className="fas fa-shopping-cart"></i>
            <span>{cart.length}</span>
          </Link>
        )}
        <button style={styles} className="nav-icon">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
