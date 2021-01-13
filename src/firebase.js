import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC1CyacZtOsZEPXho5aNn7MrXFvC_wCr_k",
  authDomain: "venatus-app-data.firebaseapp.com",
  databaseURL: "https://venatus-app-data.firebaseio.com",
  projectId: "venatus-app-data",
  storageBucket: "venatus-app-data.appspot.com",
  messagingSenderId: "548772458633",
  appId: "1:548772458633:web:3d5e6a369c712547fed658",
  measurementId: "G-V9WNFC8L4J",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
