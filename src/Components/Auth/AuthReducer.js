import * as types from "./AuthActionType";
const initialState = {
  logging: false,
  loginError: false,

  userDetails: [],
  loggedIn: null,

  registeredInd: false,

  registering: false,
  registeringError: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, logging: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
        loggedIn: action.payload,
      };
    case types.LOGIN_FAILURE:
      return { ...state, logging: false, loginError: true };

    case types.REGISTER_REQUEST:
      return { ...state, registering: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        registeredInd: true,
        userDetails: action.payload,
      };
    case types.REGISTER_FAILURE:
      return { ...state, registering: false, registeringError: true };

    case types.LOGOUT:
      return { ...state, userDetails: [] };

    default:
      return state;
  }
};
