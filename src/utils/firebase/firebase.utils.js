// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider} from "firebase/auth"

import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEv_dLaW8R6vYW5-YV3GDAkEBTeoJMQkA",
  authDomain: "crown-clothing-db-87729.firebaseapp.com",
  projectId: "crown-clothing-db-87729",
  storageBucket: "crown-clothing-db-87729.appspot.com",
  messagingSenderId: "1049507980615",
  appId: "1:1049507980615:web:9c2790824bc656e314d862"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters(
  {
    prompt:"select_account"
  }
)
export const auth = getAuth()
export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocFromAuth =async (userAuth) => {
       const userDocRef = doc(db, 'users', userAuth.uid)
       console.log(userDocRef);
}