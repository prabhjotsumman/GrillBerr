import firebase from 'firebase/app'
// import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBay1FKM38K87X83hjz96mKpSfMq9W2KkA",
  authDomain: "grillber-react.firebaseapp.com",
  databaseURL: "https://grillber-react.firebaseio.com",
  projectId: "grillber-react",
  storageBucket: "grillber-react.appspot.com",
  messagingSenderId: "106554603234",
  appId: "1:106554603234:web:8d7b55465686e84ab090bb",
  measurementId: "G-64EVYE61F8",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
//   emailAuthProvider: new firebase.auth.EmailAuthProvider(),
// };

// firebase.firestore().settings({timestampsInSnapshots : true});

// export default firebaseApp;
// export default firebaseConfig;
export default firebase;
