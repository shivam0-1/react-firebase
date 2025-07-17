import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ for user-friendly error display

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        console.log(userData.user);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
        setError("Invalid email or password."); // ✅ Display user-friendly message
      });
  };

  const loginWithGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate("/dashboard"); // ✅ Navigate after Google login
      })
      .catch((err) => {
        console.error(err);
        setError("Google login failed. Please try again.");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* ✅ Display error */}
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <br />
        <br />
        <button type="button" onClick={loginWithGoogle}>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
