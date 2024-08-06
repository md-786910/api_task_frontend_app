// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQL06XkdLR1sZ8UznmouacSi4ccMhN6qg",
    authDomain: "chat-21081.firebaseapp.com",
    projectId: "chat-21081",
    storageBucket: "chat-21081.appspot.com",
    messagingSenderId: "6588373271",
    appId: "1:6588373271:web:ccb5a73115314e861b7f52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();