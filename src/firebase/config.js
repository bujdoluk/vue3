import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBYqKTWpqk8Kh8RWj4vD9cWu0dHgh6Dncg",
    authDomain: "musoninjas-b5871.firebaseapp.com",
    projectId: "musoninjas-b5871",
    storageBucket: "musoninjas-b5871.appspot.com",
    messagingSenderId: "256182342747",
    appId: "1:256182342747:web:a9ea45b5244edec89f9b7e"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.fireStore()
const projectAuth = firebase.auth();
const timestamp = firebase.fireStore.FieldValue.serverTimestamp();

export { projectFirestore, projectAuth, timestamp };