import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTPBJVQ6rE4cArs4cu-8Grk_x75zp9JPQ",
  authDomain: "todo-list-1ff0b.firebaseapp.com",
  projectId: "todo-list-1ff0b",
  storageBucket: "todo-list-1ff0b.appspot.com", // Fixed storageBucket URL
  messagingSenderId: "831796179060",
  appId: "1:831796179060:web:2181e7b9fa477ae6e8e121",
  databaseURL: "https://todo-list-1ff0b-default-rtdb.firebaseio.com", // Corrected databaseURL
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };