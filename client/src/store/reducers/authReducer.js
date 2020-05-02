import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
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
    default:
      return state;
  }
};

export default authReducer;
