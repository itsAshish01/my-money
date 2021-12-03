import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDuIowyZsBHngDpZKeJQzt2AoWmGEIQvA4',
  authDomain: 'mymoney-byap.firebaseapp.com',
  projectId: 'mymoney-byap',
  storageBucket: 'mymoney-byap.appspot.com',
  messagingSenderId: '1049239997989',
  appId: '1:1049239997989:web:ed25be6d66c6a74c8039cc',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
