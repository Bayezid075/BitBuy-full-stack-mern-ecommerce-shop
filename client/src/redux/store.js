import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
