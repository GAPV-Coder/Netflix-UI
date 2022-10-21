import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAG-dXt9lfkGRPKULmbrufWsRiQ_5OxHvY",
	authDomain: "react-netflix-clone-67e76.firebaseapp.com",
	projectId: "react-netflix-clone-67e76",
	storageBucket: "react-netflix-clone-67e76.appspot.com",
	messagingSenderId: "828235303593",
	appId: "1:828235303593:web:c0766d6681335ecf31f7b8",
	measurementId: "G-68T4QDX9ZN"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
