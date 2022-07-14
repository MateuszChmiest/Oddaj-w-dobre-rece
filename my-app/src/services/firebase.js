// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB8nqqPu4w4juuKpjvWKakeyJ2XGmNhhTY",
	authDomain: "oddajwdobrerece-acf60.firebaseapp.com",
	projectId: "oddajwdobrerece-acf60",
	storageBucket: "oddajwdobrerece-acf60.appspot.com",
	messagingSenderId: "137445121658",
	appId: "1:137445121658:web:ed8ab5301cfd10d34a25c3",
};

// Initialize Firebase
export const fire = initializeApp(firebaseConfig);
export const auth = getAuth(fire);
export const db = getFirestore(fire);

export function signup(email, password) {
	return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
	return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
	return signOut(auth);
}

//* The function shows the logged user
export function useAuth() {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	});

	return currentUser;
}
