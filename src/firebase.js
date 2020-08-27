import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJc3qWgnt6Oyp65Qw6Q0BAF_IPvgGZ6q0",
    authDomain: "slack-clone-9b10f.firebaseapp.com",
    databaseURL: "https://slack-clone-9b10f.firebaseio.com",
    projectId: "slack-clone-9b10f",
    storageBucket: "slack-clone-9b10f.appspot.com",
    messagingSenderId: "769470575131",
    appId: "1:769470575131:web:f0dc1f4cd81af636933ebe",
    measurementId: "G-FRWPGKLMTW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;