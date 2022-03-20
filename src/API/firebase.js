import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGjFQMrTOylNBB5MWSsQzzISrzKT5i1ZA",
  authDomain: "image-upload-1e430.firebaseapp.com",
  projectId: "image-upload-1e430",
  storageBucket: "image-upload-1e430.appspot.com",
  messagingSenderId: "154352970369",
  appId: "1:154352970369:web:f15ece83d30d1e8ea1bb80"
};


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
