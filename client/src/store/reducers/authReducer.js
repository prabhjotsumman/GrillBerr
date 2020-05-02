import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from "../../constants/constants";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        authError: null,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        authError: "LOGIN FAILED",
      };

    case SIGNOUT_SUCCESS:
      return state;

    case SIGNUP_SUCCESS:
      console.log("SIGNUP_SUCCESS");
      return {
        ...state,
        authError: null,
      };

    case SIGNUP_FAILED:
      console.log("SIGNUP_FAILED");
      return {
        ...state,
        authError: action.err.message,
      };

    default:
      return state;
  }
};

export default authReducer;
