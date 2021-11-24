// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjbMdJiKDFnUl0sisogjOSJYkqfCe4mzk",
  authDomain: "projectmc-1.firebaseapp.com",
  projectId: "projectmc-1",
  storageBucket: "projectmc-1.appspot.com",
  messagingSenderId: "816248745582",
  appId: "1:816248745582:web:cc03e18a3361fd9d0dc07f"
};

let app;
if (firebase.apps.length === 0) {
    app =firebase.initializeApp(firebaseConfig);
} 
else {
    app =firebase.app()
}

const auth = firebase.auth();



export {auth};

