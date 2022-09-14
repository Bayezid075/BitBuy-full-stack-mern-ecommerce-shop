// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_JVgT2C3zOmHfbn5PO82e4E5nUhXSj9E",
  authDomain: "e-c6f3f.firebaseapp.com",
  projectId: "e-c6f3f",
  storageBucket: "e-c6f3f.appspot.com",
  messagingSenderId: "967286251097",
  appId: "1:967286251097:web:832a0b087d626b0782db48",
  measurementId: "G-7DLZG0PMQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
