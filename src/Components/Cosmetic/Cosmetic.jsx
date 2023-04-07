import React from 'react';
import './Cosmetic.css'
import { add } from '../../Utilities/Calculate';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        // console.log('item added:', id);
        // localStorage.setItem(id,1);
        addToDb(id);
    }
    const removeFromCart=id =>{
        removeFromDb(id);
    }
    // const addToCartWithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy item:{name}</h2>
            <h2>Only for: ${price}</h2>
            <h2>ID: {id}</h2>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={() => addToCart(id)}>add to cart</button>
        </div>
    );
};

export default Cosmetic;