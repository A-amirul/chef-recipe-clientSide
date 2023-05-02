// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAUZ05qJqIYId9PhFeh6vk9RbTjt1F4AZs",
	authDomain: "the-shef-corner.firebaseapp.com",
	projectId: "the-shef-corner",
	storageBucket: "the-shef-corner.appspot.com",
	messagingSenderId: "324968366001",
	appId: "1:324968366001:web:d29d02dd5392f7caa50790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;