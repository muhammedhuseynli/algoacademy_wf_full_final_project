import "../css/register.css";
import { registerUser } from "./api";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let tohome = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(username, password);
      setMessage(data.message);
      tohome("/");
    } catch (error) {
      setMessage(error.error);
    }
    tohome("/");
  };
  return (
    <div className="container">
      <form className="register" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input type="text" placeholder="Email Adress"></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
        <p className="login-link">
          Do you have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
