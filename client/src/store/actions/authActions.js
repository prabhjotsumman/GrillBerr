import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
} from "../../constants/constants";

export const signIn = (credentials) => {
  return (dispatch, getState,  getFirebase ) => {
    console.log(credentials);
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILED ,err});
      });
  };
};

export const signOut = () =>{
    return (dispatch, getState, getFirebase) =>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: SIGNOUT_SUCCESS});
        })
    }
}