import authReducer from "./authReducer";
import grillReducer from "./grillReducer";
import { combineReducers } from "redux";
// import { firestoreReducer }  from 'reduc-firestore'
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    grill: grillReducer
});

export default rootReducer;