// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk8VFgutzTLJNnhx38KHgolM3wQPT6MOQ",
  authDomain: "java-bakery-shop.firebaseapp.com",
  projectId: "java-bakery-shop",
  storageBucket: "java-bakery-shop.appspot.com",
  messagingSenderId: "87447526037",
  appId: "1:87447526037:web:4df0d680ca1d143ccd199c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;