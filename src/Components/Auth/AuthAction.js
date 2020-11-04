import * as types from "./AuthActionType";
import axios from "axios";
import { message } from "antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const mockData = [{}];

export const login = (data, cb) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });

  //   sessionStorage.setItem("userDetails", JSON.stringify(res.data));
  dispatch({
    type: types.LOGIN_SUCCESS,
    payload: data,
  });
  cb();
  dispatch({
    type: types.LOGIN_FAILURE,
    // payload: err,
  });
};

export const register = (data, cb) => (dispatch) => {
  dispatch({
    type: types.REGISTER_REQUEST,
  });

  dispatch({
    type: types.REGISTER_SUCCESS,
    payload: data,
  });
  cb && cb("success");
  dispatch({
    type: types.REGISTER_FAILURE,
    // payload: err,
  });
};

export const logout = (history) => (dispatch) => {
  dispatch({ type: types.LOGOUT });
  history.push("/signin");
  message.success("You have successfully logged out. See you soon.");
};
