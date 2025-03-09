    import React, { useContext } from 'react'
    import { CartContext } from './context/CartContext'

    const CartProduct = (props) => {
        const {removefromCart}=useContext(CartContext)
        const [count,setCounter]=React.useState(1)
        function add(){
            setCounter(prev=>prev+1)
        }
        function sub(){
            setCounter(prev=>prev-1)
        }
        return props.cart.map(product => (
            <div key={product.id} className='cart-product'>
                <img src={product.imageUrl} className='cart-product-image' />
                <div className='cart-product-between'>
                <div className='cart-product-details'>
                    <div className='cart-product-details-title'>
                        <h4 className='cart-product-title'>{product.title}</h4>
                        <h7 className='cart-product-reviews'>{product.reviews}</h7>
                    </div>
                </div>
                <div className='cart-product-other'>
                
                <h7 className='cart-product-price'>Price: {product.price} L.E</h7>
                <button className='delete-product' onClick={()=>removefromCart(product.id)}>Delete</button>
                </div>
                </div>
                
                

        
        
        </div>
        ))
    }

    export default CartProduct
