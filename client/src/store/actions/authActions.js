import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED
} from "../../constants/constants";

export const signIn = (credentials) => {
  return (dispatch, getState,  getFirebase ) => {
    // console.log(credentials);
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

export const signUp = (newUser) =>{
    return (dispatch, getState, getFirebase) =>{
        const firebase = getFirebase();
        
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            console.log("UID :",res.user.uid);
            //TODO: Store in the MongoDB
            //create the user and then return
            return {}
            // return firebase.collection('users').doc(res.user.uid).set({
            //     firstName: newUser.firstName,
            //     lastName: newUser.lastName,
            //     initials: newUser.firstName[0] + newUser.lastName[0]
            // })
        }).then(()=>{
            dispatch({type: SIGNUP_SUCCESS})
        }).catch(err =>{
            dispatch({type: SIGNUP_FAILED, err})
        })
    }
}