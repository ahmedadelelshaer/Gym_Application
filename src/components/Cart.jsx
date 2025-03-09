import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './context/CartContext';
import NavBar from './Navbar';
import CartProduct from './CartProduct';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState('none');

  
  useEffect(() => {
    const calculatePrice = () => {
      let totalp = 0;
      for (let i = 0; i < cart.length; i++) {
        totalp += cart[i].price;
      }
      setPrice(totalp);
    };
    calculatePrice();
  }, [cart]);

  
  useEffect(() => {
    let shippingCost = 0;
    switch (shipping) {
      case 'USPS':
        shippingCost = 9;
        break;
      case 'Egypt':
        shippingCost = 20;
        break;
      case 'UAE':
        shippingCost = 19;
        break;
      case 'SAUDI':
        shippingCost = 25;
        break;
      default:
        shippingCost = 0;
    }
    setTotal(price + shippingCost);
  }, [price, shipping]);

  
  function handleChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <NavBar textColor={"black"} />

      {cart.length > 0 ? (
        <>
          <div className='cart'>
            <div className='cart-main-container'>
              <h1 className='cart-text'>Your Shopping Cart:</h1>
              <div className='cart-products'>
                <CartProduct cart={cart} />
              </div>
            </div>

            <div className='cart-sub-container'>
              <div className='cart-sub-details'>
                <h1 className='cart-subtext'>Order Details:</h1>
                <h8 className='total-text'>Subtotal:</h8>
                <h4 className='cart-price'>{price} L.E</h4>
                <div className='dropdown-1'>
                  <label htmlFor="favColor">Shipping:</label>
                  <br />
                  <select onChange={handleChange} id="favColor" value={shipping}>
                    <option value="none">-- Choose --</option>
                    <option value="USPS">USPS(9.00L.E)</option>
                    <option value="Egypt">Egypt(20.00L.E)</option>
                    <option value="UAE">UAE(19.00L.E)</option>
                    <option value="SAUDI">SAUDI(25.00L.E)</option>
                  </select>
                </div>
                <div className='dropdown-2'>
                  <label htmlFor="PromoCode">PromoCode:</label>
                  <input placeholder='Enter Promo code here' className='promoInput'></input>
                  <br />
                </div>
                <hr className='hr' />
                <div className='checkout'>
                  <h7 className='total-cost'>Total Cost</h7>
                  <h1 className='total'>{total} L.E</h1>
                  <button className='checkout-button'>Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className='cart-empty'>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
