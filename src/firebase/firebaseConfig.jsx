import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBBcBN79XKcce600kjU0Y-Vx4-FeCYsSHI",
    authDomain: "evoblog-f8dd6.firebaseapp.com",
    databaseURL: "https://evoblog-f8dd6-default-rtdb.firebaseio.com",
    projectId: "evoblog-f8dd6",
    storageBucket: "evoblog-f8dd6.appspot.com",
    messagingSenderId: "308181375988",
    appId: "1:308181375988:web:192df215f3a1fd082df7a1"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database();

export {database as default}