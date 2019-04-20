// db.js

import Firebase from 'firebase'
// let config = {
//     apiKey: "AIzaSyAUYC2tw__jqTEG3b2tKfnKPlaDdjWuJyw",
//     authDomain: "itumbds2019restaurant-f74cd.firebaseapp.com",
//     databaseURL: "https://itumbds2019restaurant-f74cd.firebaseio.com",
//     projectId: "itumbds2019restaurant-f74cd",
//     storageBucket: "itumbds2019restaurant-f74cd.appspot.com",
//     messagingSenderId: "410700678330"
//     };
let config = {
    apiKey: "AIzaSyCuZ6dtA279CvbUXTSzzPAMPedS5H2oOdk",
    authDomain: "itumbdsrestaurant.firebaseapp.com",
    databaseURL: "https://itumbdsrestaurant.firebaseio.com",
    projectId: "itumbdsrestaurant",
    storageBucket: "itumbdsrestaurant.appspot.com",
    messagingSenderId: "436765458051"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()
export const storage = app.storage()
//export const database = app.firestore();