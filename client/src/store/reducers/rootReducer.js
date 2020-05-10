import authReducer from "./authReducer";
import grillReducer from "./grillReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    grill: grillReducer,
    cart: cartReducer
});

export default rootReducer;