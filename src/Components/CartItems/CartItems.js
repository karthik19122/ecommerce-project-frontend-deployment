
import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import axios from 'axios';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  const proceedToCheckout = async () => {
    try {
      const userId = '6558df7a7d76e99493759624';

      const cartItemsToSave = Object.keys(cartItems)
        .filter(itemId => cartItems[itemId] > 0)
        .map(itemId => ({
          name: all_product.find(product => product.id === Number(itemId)).name,
          description: all_product.find(product => product.id === Number(itemId)).description,
          price: all_product.find(product => product.id === Number(itemId)).new_price,
          quantity: cartItems[itemId],
        }));

      console.log('userId:', userId);
      console.log('cartItemsToSave:', cartItemsToSave);

      
      await axios.post('https://backend-deployment-ecommerce-project.onrender.com/api/checkout', {
        userId,
        cartItems: cartItemsToSave,
        totalAmount: getTotalCartAmount(),
      });

      console.log('Checkout successful');

    } catch (error) {
      console.error('Error saving cart items:', error);
      
    }
  };
  

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>Rs{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>Rs{e.new_price * cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <h1>Subtotal</h1>
              <p>Rs{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>Rs{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={proceedToCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className=''>
          <p></p>
          <div className=''>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
