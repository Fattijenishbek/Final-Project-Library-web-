import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsVMjCqfafT50ntqLd-4F6olSX72WaoyI",
    authDomain: "library-web-6ed6d.firebaseapp.com",
    databaseURL: "https://library-web-6ed6d-default-rtdb.firebaseio.com",
    projectId: "library-web-6ed6d",
    storageBucket: "library-web-6ed6d.appspot.com",
    messagingSenderId: "179960351011",
    appId: "1:179960351011:web:40d881ee607bdb67f12496"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth()
  export const db = firebase.firestore()

  export default firebase;