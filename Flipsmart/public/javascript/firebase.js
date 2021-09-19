const firebaseConfig = {
  apiKey: "AIzaSyAisj61CZ9gOVtaGjAWMKSF6tpRSJTWHo0",
  authDomain: "flipsmart-5ffd9.firebaseapp.com",
  projectId: "flipsmart-5ffd9",
  storageBucket: "flipsmart-5ffd9.appspot.com",
  messagingSenderId: "123240265095",
  appId: "1:123240265095:web:2845b4c9dba7d50a430f22"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(firebase.auth().signInWithEmailAndPassword);