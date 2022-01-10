import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA8EWDGjZn97UG2-5beS-2WWKX9Edczx6Q",
    authDomain: "pimw1-870fb.firebaseapp.com",
    projectId: "pimw1-870fb",
    storageBucket: "pimw1-870fb.appspot.com",
    messagingSenderId: "417425490614",
    appId: "1:417425490614:web:e2b503fbc942d1cbc2dc17"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
