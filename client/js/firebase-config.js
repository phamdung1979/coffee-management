// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfSm-BZhiODl3byTNFw4dapzaWulCyVxI",
    authDomain: "coffee-management-94b07.firebaseapp.com",
    projectId: "coffee-management-94b07",
    storageBucket: "coffee-management-94b07.firebasestorage.app",
    messagingSenderId: "486333974763",
    appId: "1:486333974763:web:ca2c32d25265e0348816ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};