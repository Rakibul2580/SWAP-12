// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyB8SFO1j6Rz_IG9DsZIvzXaLScHhNKBPpc",
  authDomain: "shop-99203.firebaseapp.com",
  projectId: "shop-99203",
  storageBucket: "shop-99203.appspot.com",
  messagingSenderId: "136014448722",
  appId: "1:136014448722:web:af65b66905168c764af78b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
