import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBYqKTWpqk8Kh8RWj4vD9cWu0dHgh6Dncg",
    authDomain: "musoninjas-b5871.firebaseapp.com",
    projectId: "musoninjas-b5871",
    storageBucket: "musoninjas-b5871.appspot.com",
    messagingSenderId: "256182342747",
    appId: "1:256182342747:web:a9ea45b5244edec89f9b7e"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, projectAuth, projectStorage, timestamp };