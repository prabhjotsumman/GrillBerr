import authReducer from "./authReducer";

import { combineReducers } from "redux";
// import { firestoreReducer }  from 'reduc-firestore'
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer
});

export default rootReducer;