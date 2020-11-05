import * as types from "./AuthActionType";
const initialState = {
  logging: false,
  loginError: false,
  //   userDetails: sessionStorage.getItem("userDetails")
  //     ? JSON.parse(sessionStorage.getItem("userDetails"))
  //     : [],
  userDetails: [],
  loggedIn: null,

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
        // loggedIn: state.userDetails.map((item) => {
        //   debugger;
        //   console.log(item);

        //   if (
        //     item.emailAddress === action.payload.emailAddress &&
        //     item.password === action.payload.password
        //   ) {
        //     debugger;
        //     return item;
        //   } else {
        //     debugger;
        //     return null;
        //   }
        // }),
      };
    // case types.LOGIN_FAILURE:
    //   return { ...state, logging: false, loginError: true };

    case types.REGISTER_REQUEST:
      return { ...state, registering: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        userDetails: [action.payload],
      };
    case types.REGISTER_FAILURE:
      return { ...state, registering: false, registeringError: true };

    case types.LOGOUT:
      return { ...state, userDetails: [] };

    default:
      return state;
  }
  return state;
};
