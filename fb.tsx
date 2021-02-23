import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyC32vk7CBUH2ZOoq39TXjzLd9Y5MVZKCrY",
  authDomain: "firebulary-f485e.firebaseapp.com",
  projectId: "firebulary-f485e",
  storageBucket: "firebulary-f485e.appspot.com",
  messagingSenderId: "276514693749",
  appId: "1:276514693749:web:805234499c9c9041890e3c",
  measurementId: "G-47LHRYWVQK",
};

firebase.initializeApp(firebaseConfig);

firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err.message));

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.functions();

export const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export default firebase;
