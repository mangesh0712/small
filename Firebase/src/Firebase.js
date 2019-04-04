import firebase from "firebase/app";
import "firebase/firestore";



const config = {
    apiKey: "AIzaSyCGE7G5Rkv-BnXdQ21YwcWXtjKzFG7JGf0",
    authDomain: "fitness-app-27395.firebaseapp.com",
    databaseURL: "https://fitness-app-27395.firebaseio.com",
    projectId: "fitness-app-27395",
    storageBucket: "fitness-app-27395.appspot.com",
    messagingSenderId: "63070060026"
  };

  firebase.initializeApp(config);

  const db= firebase.firestore();

  export default db;