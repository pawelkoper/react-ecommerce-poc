import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxi5JjaQzGnF3fxvUQgNUZyQ_2sP1DcQw",
    authDomain: "crwn-db-9af6c.firebaseapp.com",
    databaseURL: "https://crwn-db-9af6c.firebaseio.com",
    projectId: "crwn-db-9af6c",
    storageBucket: "crwn-db-9af6c.appspot.com",
    messagingSenderId: "52890393270",
    appId: "1:52890393270:web:52d786607341d9fe92a417",
    measurementId: "G-3X1VDD6QCH"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


