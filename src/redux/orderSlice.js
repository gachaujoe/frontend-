import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {
    setOrderHistory: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrderHistory } = orderSlice.actions;
export default orderSlice.reducer;
