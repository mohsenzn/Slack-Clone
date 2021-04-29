import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCNCQa-RNmy1yR4sZi3c5_UJLjl1_k12kY",
    authDomain: "stermy-299211.firebaseapp.com",
    projectId: "stermy-299211",
    storageBucket: "stermy-299211.appspot.com",
    messagingSenderId: "1090027176122",
    appId: "1:1090027176122:web:91c0c063a0834724230283",
    measurementId: "G-3L7B5T8756"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;