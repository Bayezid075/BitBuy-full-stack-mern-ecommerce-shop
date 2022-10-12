import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cart",
  initialState: {
    currentUser: null,
    isFatching: false,
    isError: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFatching = true;
    },
    loginSuccess: (state, action) => {
      state.isFatching = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.isError = true;
    },
  },
});
export const { loginStart, loginSuccess, loginFailed } = userSlice.actions;
export default userSlice.reducer;
