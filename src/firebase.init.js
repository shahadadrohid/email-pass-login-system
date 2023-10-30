// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABCyZqFe7b8fkFbGK_YAPCIWKFIwFR0EI",
    authDomain: "email-authentication-1c213.firebaseapp.com",
    projectId: "email-authentication-1c213",
    storageBucket: "email-authentication-1c213.appspot.com",
    messagingSenderId: "1095663051105",
    appId: "1:1095663051105:web:62105d6650fe6ae4e8e520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;