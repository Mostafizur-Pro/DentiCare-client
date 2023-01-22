// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyBMQ29M0JLWk9c7YTYPHlm_Wjdjp_SUvfw",
  authDomain: "denticare-a7aea.firebaseapp.com",
  projectId: "denticare-a7aea",
  storageBucket: "denticare-a7aea.appspot.com",
  messagingSenderId: "139756379127",
  appId: "1:139756379127:web:147c15a6a6b8a64a236cf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
