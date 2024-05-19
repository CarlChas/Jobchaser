// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzNqu1QI3JPrPhgXOwlBPy8y0aJQ0gixk",
  authDomain: "jobchaser-54e94.firebaseapp.com",
  projectId: "jobchaser-54e94",
  storageBucket: "jobchaser-54e94.appspot.com",
  messagingSenderId: "481847741080",
  appId: "1:481847741080:web:0ee17462dcb8db5ffc9eed"
};

// Initialize Firebase
const MyFirebase = initializeApp(firebaseConfig)

const MyAuth = getAuth(MyFirebase)
export default MyAuth 