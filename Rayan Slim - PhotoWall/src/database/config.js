import firebase from 'firebase'; //ATTENTION, AFter version 8.0 no need * as firebase

var firebaseConfig = {
    apiKey: "AIzaSyCX7sBEuXfoyvB0l8rTp8VM7XYQTQWQX7Y",
    authDomain: "photowall-41fc8.firebaseapp.com",
    databaseURL: "https://photowall-41fc8-default-rtdb.firebaseio.com",
    projectId: "photowall-41fc8",
    storageBucket: "photowall-41fc8.appspot.com",
    messagingSenderId: "800090144695",
    appId: "1:800090144695:web:408c0ecc00f502bdddf232"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
