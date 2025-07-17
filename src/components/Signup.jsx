import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app } from '../Firebase';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate= useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const auth= getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
        console.log(res.user);
        navigate('/login')
    })
    .catch(err => {
        console.log(err);
    })
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
