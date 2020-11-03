import { combineReducers } from "redux";
// import { mainReducer } from "../Container/MainReducer";

/**
 *  All of application reducers import goes here...
 */

const appReducer = combineReducers({
  //   main: mainReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
