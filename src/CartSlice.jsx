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
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
        console.clear();
        for (const key in state) {
          console.log(`${key}:`, state[key]);
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

      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If item already exists in the cart, increase its quantity
        existingItem.quantity--;
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.items.filter(item => item.name !== name.payload);
        console.clear();
        for (const key in state) {
          console.log(`${key}:`, state[key]);
        }
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // 
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If item already exists in the cart, increase its quantity
        existingItem.quantity = quantity.payload;
      } 
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