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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user ', error.message);
      }
    }
    return userRef;
  } 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;