import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyCckgrp6a9jxFvhvcAbHqMzhzs54TTVMJI",
  authDomain: "instagram-clone-7c1dd.firebaseapp.com",
  projectId: "instagram-clone-7c1dd",
  storageBucket: "instagram-clone-7c1dd.appspot.com",
  messagingSenderId: "698932642771",
  appId: "1:698932642771:web:a8cd498ae38ff746c5a526",
  measurementId: "G-YZF1ZK71CB"
};
const firebaseapp=firebase.initializeApp(firebaseConfig)
const db=firebaseapp.firestore()
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export default db;
export {auth,provider}