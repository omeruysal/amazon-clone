import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import "firebase/compat/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA7b8SsVCxyX9LO_rnRSVAFIlvwZt_TIic",
    authDomain: "clone-f566e.firebaseapp.com",
    projectId: "clone-f566e",
    storageBucket: "clone-f566e.appspot.com",
    messagingSenderId: "151236978064",
    appId: "1:151236978064:web:80a9e2a6e81b23ed673f15"
  };
  const app = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth };