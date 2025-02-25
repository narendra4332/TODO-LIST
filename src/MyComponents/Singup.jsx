import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./Firebase";
import "./Signup.css";


const auth = getAuth(app);  

const googleProvider = new GoogleAuthProvider();

const Sinup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CreatUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  const singinWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="main-box">
      <div className="signup-page">
      <h1 className="heading">SingUp Page</h1>
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
        <button onClick={CreatUser} className="btn1">Signup</button>
        <button onClick={singinWithGoogle} className="btn2">Sing in with google</button>
      </div>
   </div>
  );
};

export default Sinup;
