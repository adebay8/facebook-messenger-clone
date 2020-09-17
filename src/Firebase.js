import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDIdqSEDn6UKs59dqy1Gnt-yRwAJnzXxWs",
    authDomain: "facebook-messenger-clone-d0b23.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-d0b23.firebaseio.com",
    projectId: "facebook-messenger-clone-d0b23",
    storageBucket: "facebook-messenger-clone-d0b23.appspot.com",
    messagingSenderId: "932258972823",
    appId: "1:932258972823:web:3eb8b67119f450187355d2",
    measurementId: "G-R6JQ35CZTB"

});

const db = firebaseApp.firestore();

export default db;