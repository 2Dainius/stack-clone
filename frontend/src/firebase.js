// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbTorYdHSQ1sW0Qf2arkoeAu2uDm6PBX8",
  authDomain: "stack-clone-59ac1.firebaseapp.com",
  projectId: "stack-clone-59ac1",
  storageBucket: "stack-clone-59ac1.appspot.com",
  messagingSenderId: "126454955953",
  appId: "1:126454955953:web:26b916ffeec3f5fcb84790",
  measurementId: "G-JPD9L6DXKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()