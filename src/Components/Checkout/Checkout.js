
import React, { useContext } from 'react';

import './Checkout.css'; 
import { ShopContext } from '../../Context/ShopContext';

const Checkout = () => {
  const { getTotalCartAmount, all_product, cartItems } = useContext(ShopContext);

  return (
    <div className='checkout'>
      <h1>Checkout</h1>
      <div className='checkout-items'>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className='checkout-item'>
                  <p>{e.name}</p>
                  <p>Rs{e.new_price}</p>
                  <p>Quantity: {cartItems[e.id]}</p>
                  <p>Total: Rs{e.new_price * cartItems[e.id]}</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='checkout-total'>
        <h2>Total Amount: Rs{getTotalCartAmount()}</h2>
        <p>Shipping Fee: Free</p>
        
        
      </div>
    </div>
  );
}

export default Checkout;
