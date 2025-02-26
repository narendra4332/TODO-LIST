import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,signInWithEmailAndPassword
} from "firebase/auth";
import { app } from "./Firebase";
import "./Signup.css";


const auth = getAuth(app);  

const googleProvider = new GoogleAuthProvider();

const Sinup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Account Created Successfully ✅"))
      .catch((error) => alert(error.message));
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Logged in Successfully ✅"))
      .catch((error) => alert(error.message));
  };

 const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => alert("Signed in with Google ✅"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="main-box">
      <div className="signup-page">
      <h1 className="heading">Sign Up / Sign In Page</h1>
        <label htmlFor="" className="lable-style">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          placeholder="Enter your email here"
       className="input-style" />
        <label htmlFor=""  className="lable-style">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          placeholder="Enter your Password here"
        className="input-style"/>
        <button onClick={createUser} className="btn1">Sign Up</button>
        <button onClick={signInWithGoogle} className="btn2">Sign in with Google</button>
        <button onClick={signInUser} className="btn3">Sign In</button>
      </div>
   </div>
  );
};

export default Sinup;
