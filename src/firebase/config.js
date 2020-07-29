import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; //database for images

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAg8LjOcx4b29vGUSX4IVfH6glmQoEz0lE',
  authDomain: 'firegram-532b0.firebaseapp.com',
  databaseURL: 'https://firegram-532b0.firebaseio.com',
  projectId: 'firegram-532b0',
  storageBucket: 'firegram-532b0.appspot.com',
  messagingSenderId: '215105630198',
  appId: '1:215105630198:web:3722a360e13370ca09a1d7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
