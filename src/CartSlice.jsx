import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  }, 
  reducers: {//En Redux Toolkit, los reducers se definen dentro de un slice
    addItem: (state, action) => {
      // function addItem(state, newPlant) {
      //   return [...state, newPlant];
      // }
      const { name, image, cost } = action.payload; // Destructure product details from the action payload
        // Check if the item already exists in the cart by comparing names
      //el reducer está esperando que los datos vengan de paylaod. Es una convención muy común en Redux: los datos que necesitas para actualizar el estado vienen dentro de action.payload. No de ninguna otra partek
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If item already exists in the cart, increase its quantity
        existingItem.quantity++;
        // console.log("existingItem.quantity : " + existingItem.quantity);
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
        // console.clear();
        for (const key in state) {
          // console.log(`${key}:`, state[key]);
        }
        
        //en redux sin toolkit(limmer), seria 
        // return {
        //   ...state,
        //   items: [...state.items, { name, image, cost, quantity: 1 }]
        // };

      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload; // Destructure product details from the action payload

      console.clear();
      // console.log("action.payload :; " + action.payload);
      // const existingItem = state.items.find(item => item.name === name);
      // state.items.filter(item => item.name !== name.payload);
      state.items = state.items.filter(item => item.name !== name);
      //classic JS
      // state.items.filter(function (item) {
        //   return item.name !== action.payload;
        // });
        // console.clear();
        // console.log("action.payload :; " + action.payload);
        
    },
    updateQuantity: (state, action) => {
      // action.payload.quantity = action.payload.quantity + amount; // 
      // console.log("action : " + JSON.stringify(action.payload));

      const { item, amount } = action.payload;
      const { name } = item;
      // console.log("name : " + name)
      // console.log("amount : " + amount)
      const itemFound = state.items.find(item => item.name === name);
      if (itemFound) {
        itemFound.quantity += amount; // update state, not action
        // console.log("item.quantity : " + itemFound.quantity)
      }

      // const existingItem = state.items.find(item => item.name === name);
      // console.log("action.payload :; " + action.payload);
      // if (existingItem) {
      //   // If item already exists in the cart, increase its quantity
      //   existingItem.quantity = quantity.payload;
      // } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

// addItem: (state, action) => {
//   const { name, image, cost } = action.payload; // Destructure product details from the action payload
//   // Check if the item already exists in the cart by comparing names
//   const existingItem = state.items.find(item => item.name === name);
//   if (existingItem) {
//     // If item already exists in the cart, increase its quantity
//     existingItem.quantity++;
//   } else {
//     // If item does not exist, add it to the cart with quantity 1
//     state.items.push({ name, image, cost, quantity: 1 });
//   }
// }, 

//