// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTq5JAZXQ46s8kONAHRnZzmWTA34CsF8",
  authDomain: "watchwave-180c4.firebaseapp.com",
  projectId: "watchwave-180c4",
  storageBucket: "watchwave-180c4.appspot.com",
  messagingSenderId: "351356733607",
  appId: "1:351356733607:web:b3fac4e9bfd8039c5df382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app