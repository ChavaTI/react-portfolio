import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCcvv0akmV2-k6m6ezcMH6al-AinsHQvaY",
  authDomain: "data-resume.firebaseapp.com",
  databaseURL: "https://data-resume-default-rtdb.firebaseio.com",
  projectId: "data-resume",
  storageBucket: "data-resume.appspot.com",
  messagingSenderId: "111993857854",
  appId: "1:111993857854:web:fe016cb7f3fc4b7c946e6f",
  measurementId: "G-SQEPEFEKSW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
