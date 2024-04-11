// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiJZBjqpcHlxfmGPM-5irjIeBgyEzElXo",
  authDomain: "vite-contact-d1523.firebaseapp.com",
  projectId: "vite-contact-d1523",
  storageBucket: "vite-contact-d1523.appspot.com",
  messagingSenderId: "644911975680",
  appId: "1:644911975680:web:d2eaa5891ba3f8cc18f7e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

