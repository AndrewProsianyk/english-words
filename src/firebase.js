import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyC1HqAjCXvrghMzOM_wL6Ai--f7yAJqSfM",
    authDomain: "vocabulary-e0975.firebaseapp.com",
    projectId: "vocabulary-e0975",
    storageBucket: "vocabulary-e0975.appspot.com",
    messagingSenderId: "191677291647",
    appId: "1:191677291647:web:bf38839c4194d6da40f34a"
});

const auth = getAuth()
const provider = new GoogleAuthProvider()
const db = getFirestore(app);

export { auth, provider, db }