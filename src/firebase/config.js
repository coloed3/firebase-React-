import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; //database for images
require('dotenv').config();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.firebase_api_key,
  authDomain: 'firegram-532b0.firebaseapp.com',
  databaseURL: 'https://firegram-532b0.firebaseio.com',
  projectId: 'firegram-532b0',
  storageBucket: 'firegram-532b0.appspot.com',
  messagingSenderId: '215105630198',
  appId: process.env.firebase_id,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.ServerTimeStamp;
export { projectStorage, projectFirestore, timestamp };
