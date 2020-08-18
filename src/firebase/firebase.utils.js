import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCsENrB5sXBtOs2hi5AIIA_5MERNzWqBKs",
    authDomain: "shopping-cart-db-6b1e4.firebaseapp.com",
    databaseURL: "https://shopping-cart-db-6b1e4.firebaseio.com",
    projectId: "shopping-cart-db-6b1e4",
    storageBucket: "shopping-cart-db-6b1e4.appspot.com",
    messagingSenderId: "934800966737",
    appId: "1:934800966737:web:c16ff6d1baec71fec2e470",
    measurementId: "G-ELMSNRD7FM"
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;