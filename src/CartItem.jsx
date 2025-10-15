import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  
  // const [addedToCart, setAddedToCart] = useState({}); //objeto vacio objeto=pares clave-valor
  const [removedFromCart, setRemovedFromCart] = useState({}); //objeto vacio objeto=pares clave-valor
  
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    console.clear();
    // // let total = 0;
    // cart.forEach((product) => {
    //   //cart.forEach(function(product) {
    //   const quantity = product.quantity;
    //   const cost = product.cost;
    //   console.log(`Quantity: ${quantity}, Cost: ${cost}`);
    //   const total = cart.reduce((acc, item) => acc + item.quantity * item.cost, 0);
    //   console.log(`total: ${total}`);
    
    // total +=  quantity * cost;
    //});
    const total = cart.reduce((acc, item) => acc + item.quantity * item.cost, 0);
    console.log(`total: ${total}`);
    return total;


    // const plantas = useSelector(state => state.cart.items);
    // cart.forEach(plantas => planta.quan)
    // const precios = plantas.map(planta => planta.cost * planta.quantity);
    //   console.log("precios  = " + precios)  
  };

  const handleContinueShopping = (e) => {
   
  };



  const handleIncrement = (item) => {
  };

  const handleDecrement = (item) => {
   
  };

  const handleRemove = (item) => {
    console.log("remove");
    // dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action) GLOBAL STATE (REdux)
    dispatch(removeItem(item)); // Dispatch the action to add the product to the cart (Redux action) GLOBAL STATE (REdux)
    // e.preventDefault();
    setRemovedFromCart(prevState => ({ //local state
      ...prevState,
      [item.name]: true, //
    }));
  };
  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


