// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBcSZQQabyRGG1IzB3tzm-DPlpOmtboEzU",
  authDomain: "imessage-clone-da805.firebaseapp.com",
  databaseURL: "https://imessage-clone-da805.firebaseio.com",
  projectId: "imessage-clone-da805",
  storageBucket: "imessage-clone-da805.appspot.com",
  messagingSenderId: "465927210170",
  appId: "1:465927210170:web:bd45bd0b115de5c9102e83",
  measurementId: "G-V66Y6RJK02",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
