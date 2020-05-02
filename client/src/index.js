import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import thunk from "redux-thunk";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./firebase/firebaseconfig";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase))
    // reactReduxFirebase(firebaseConfig)
  )
);

const reduxFirebase = {
  // userProfile: "users",
  // useFirestoreForProfile: true,
  enableLogging: true,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div><h3>Loading your Grillber Experience...</h3></div>;
  return children;
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={reduxFirebase}
      dispatch={store.dispatch}
    >
      <React.StrictMode>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
