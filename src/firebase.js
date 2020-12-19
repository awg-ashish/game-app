import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDzuQ1e1aWVIq56aX5IlveMaEVgyzaD5CE",
  authDomain: "awg-games-app.firebaseapp.com",
  projectId: "awg-games-app",
  storageBucket: "awg-games-app.appspot.com",
  messagingSenderId: "143711380883",
  appId: "1:143711380883:web:dc14aca29d2cb1445ab466",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
