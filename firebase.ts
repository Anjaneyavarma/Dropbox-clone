// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCXlzdejH2eWiEgv2Vn6egolv7K4G2_sk",
  authDomain: "dropbox-clone-e3937.firebaseapp.com",
  projectId: "dropbox-clone-e3937",
  storageBucket: "dropbox-clone-e3937.appspot.com",
  messagingSenderId: "560031249219",
  appId: "1:560031249219:web:b2d0fbf7c5bea4162cf5f6",
  measurementId: "G-0Z4X3C4J5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}