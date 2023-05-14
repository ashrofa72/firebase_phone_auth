import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVKudPY-depL5txk-DeR464blMSU-Wzyo",
  authDomain: "myportfolio-aa6a0.firebaseapp.com",
  projectId: "myportfolio-aa6a0",
  storageBucket: "myportfolio-aa6a0.appspot.com",
  messagingSenderId: "220674665577",
  appId: "1:220674665577:web:72a028892ec65d63b086f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
