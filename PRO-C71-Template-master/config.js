import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB0XTMsMrNklwv6ec-NoC6q7enIfSL4JEY",
    authDomain: "c-71-3758e.firebaseapp.com",
    projectId: "c-71-3758e",
    storageBucket: "c-71-3758e.appspot.com",
    messagingSenderId: "1018932441940",
    appId: "1:1018932441940:web:62510ae3728d2eb52d8ec1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
