// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCex_U0X6JYcKLggs4RMFnFH_fajrtSCI",
  authDomain: "fir-auth-8cd91.firebaseapp.com",
  projectId: "fir-auth-8cd91",
  storageBucket: "fir-auth-8cd91.appspot.com",
  messagingSenderId: "394605136344",
  appId: "1:394605136344:web:abf79b99e7b9288841caad",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
