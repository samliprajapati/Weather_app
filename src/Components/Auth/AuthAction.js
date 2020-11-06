import * as types from "./AuthActionType";

import { message } from "antd";

export const login = (data, cb) => (dispatch, getState) => {
  debugger;
  const { userDetails } = getState("auth").auth;
  console.log(userDetails);
  console.log(data);
  dispatch({
    type: types.LOGIN_REQUEST,
  });

  userDetails.forEach((item) => {
    debugger;
    if (
      item.emailAddress === data.emailAddress &&
      item.password === data.password
    ) {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: data,
      });
      cb && cb("success");
    } else {
      dispatch({
        type: types.LOGIN_FAILURE,
      });
      cb && cb("failure");
    }
  });
};

export const register = (data, history) => (dispatch) => {
  console.log(data);
  dispatch({
    type: types.REGISTER_REQUEST,
  });
  if (data.emailAddress && data.password) {
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data,
    });
  } else {
    dispatch({
      type: types.REGISTER_FAILURE,
      // payload: data,
    });
  }
};

export const logout = (history) => (dispatch) => {
  dispatch({ type: types.LOGOUT });
  history.push("/signin");
  message.success("You have successfully logged out. See you soon.");
};
