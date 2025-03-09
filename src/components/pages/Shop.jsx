import React, { useContext } from 'react';
import main_image from 'E:/Fitness_app_React/src/assets/shop-img.jpg';
import NavBar from '../Navbar';
import Product from '../Product';
import products from 'E:/Fitness_app_React/src/components/products.js';
import { CartContext } from '../context/CartContext';
import { Toaster } from 'react-hot-toast';

const Shop = () => {
  const { addCart } = useContext(CartContext);

  return (
    <div className='Shop'>
      <NavBar textColor={"black"} />
      <div className='Shop-main'>
        <div className='shop-main-container-row'>
          <div className='shop-main-container-column'>
            <h1 className='shop-main-container-text'>EXERCISE MORE AND MORE WITH OUR PRODUCTS HERE</h1>
            <button className='Shop-button'>Shop here</button>
          </div>
          <img src={main_image} className='shop-main-container-image' />
        </div>
      </div>
      <Product 
        products={products}
        addCart={addCart}
      />
      <Toaster position='top-center'/>
    </div>
  );
}

export default Shop;
