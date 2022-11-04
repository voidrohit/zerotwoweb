// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8dXdp17uI0Lb5UK7WpIN7WNAM_jR9zsQ",
    authDomain: "zerotwo-auth.firebaseapp.com",
    projectId: "zerotwo-auth",
    storageBucket: "zerotwo-auth.appspot.com",
    messagingSenderId: "837308110139",
    appId: "1:837308110139:web:686067826b0e9c1c28531e",
    measurementId: "G-PZEFKMPXW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);