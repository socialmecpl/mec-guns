import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC408CKjMEso2dQKLxYOTh31y5MRUgyMyw",
    authDomain: "mecpl-web.firebaseapp.com",
    databaseURL: "https://mecpl-web.firebaseio.com",
    projectId: "mecpl-web",
    storageBucket: "",
    messagingSenderId: "484819693374",
    appId: "1:484819693374:web:ca3c50fcf7773276a3866f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;