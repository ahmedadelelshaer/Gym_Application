    import React, { createContext, useState } from 'react';

    export const CartContext = createContext();

    export const CartProvider = ({ children }) => {
        const [cart, setCart] = useState([]);

        const addCart = (product) => {
            setCart(prev => [...prev, product]);
        };
        const removefromCart=(id)=>{
            setCart(prev=>prev.filter((product)=>product.id!==id))
        }
        return (
            <CartContext.Provider value={{ cart, addCart,removefromCart }}>
                {children}
            </CartContext.Provider>
        );
    };
