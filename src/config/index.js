// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYwY_UOwjRsWoUuAmEJu22gkTq0XEK_yg",
  authDomain: "simple-calculator-e01d7.firebaseapp.com",
  projectId: "simple-calculator-e01d7",
  storageBucket: "simple-calculator-e01d7.appspot.com",
  messagingSenderId: "56096625482",
  appId: "1:56096625482:web:394410c8172dc99e8a27b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app