// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDAvYO87f7oULscACd1Efa0jDK_l9CJVU",
  authDomain: "my-todo-app-fa263.firebaseapp.com",
  projectId: "my-todo-app-fa263",
  storageBucket: "my-todo-app-fa263.appspot.com",
  messagingSenderId: "20646229451",
  appId: "1:20646229451:web:58c64c5db3fd1ebb6f324e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {app, auth};
