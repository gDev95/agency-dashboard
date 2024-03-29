import firebase from 'firebase/app';

import 'firebase/storage';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_BASE_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_BASE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_BASE_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_BASE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BASE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_BASE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_BASE_FIREBASE_APP_ID,
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
