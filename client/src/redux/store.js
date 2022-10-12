import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default Store;
