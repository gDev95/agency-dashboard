import firebase from "firebase/app";
import "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyDbcwiVF8jxwQaDflfCYqa4GUOfMFIHM-k",
    authDomain: "agency-image-storage.firebaseapp.com",
    databaseURL: "https://agency-image-storage.firebaseio.com",
    projectId: "agency-image-storage",
    storageBucket: "gs://agency-image-storage.appspot.com/",
    messagingSenderId: "98115748325",
    appId: "1:98115748325:web:5c4060dc196f2b27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
