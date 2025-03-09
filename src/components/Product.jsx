import React from 'react'
import creatine from 'E:/Fitness_app_React/src/assets/creatine.png'
import toast from 'react-hot-toast'

const Product = (props) => {
    return props.products.map(product => (
    <div key={product.id} className='product'>
        <img className="product-image" src={product.imageUrl} alt="creatine" />
        <div className='product-details'>
            <div className='product-text'>
                <div className='info'>
                    <div className='country-container'>
                        <i className="fas fa-map-marker-alt location-icon"></i>
                        <h2 className='category'>{product.category}</h2>
                    </div>
                    <div className='product-about'>
                        <h1 className='product-title'>{product.title}</h1>
                        <h3 className='product-price'>Price: {product.price} L.E</h3>
                        <h5 className='stock'>{product.stock}</h5>
                        <h6 className='product-reviews'>{product.reviews}</h6>
                    </div>
                </div>
            </div>
            <button className='add-to-cart' onClick={
                ()=>{props.addCart(product);toast.success("Product added to cart successfully")
            }}>Add to cart</button>
        </div>
    </div>
  )
)}

export default Product
