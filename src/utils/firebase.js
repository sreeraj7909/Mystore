// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY1oL7lHLR-PSlG18Xo0-ZbQxfh1yP3ME",
  authDomain: "mystore-14f89.firebaseapp.com",
  projectId: "mystore-14f89",
  storageBucket: "mystore-14f89.appspot.com",
  messagingSenderId: "34241821278",
  appId: "1:34241821278:web:9e46834f6b1cb35dba52cf",
  measurementId: "G-8KY018BPJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);