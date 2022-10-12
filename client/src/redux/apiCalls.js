import { loginStart, loginSuccess, loginFailed } from "./userRedux";
import axios from "axios";

export const LoginCall = async (dispatch, user) => {
  dispatch(loginStart);
  try {
    const res = await axios.post("http://localhost:5000/api/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailed());
  }
};
