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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {

        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            const newUser = {displayName: displayName, email: email, createdAt: createdAt, ...additionalData};

            console.log("Creating a new user : ", newUser)
            await userRef.set(newUser)
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


