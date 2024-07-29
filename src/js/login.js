import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../js/api.js";
import { useState } from "react";
import Header from "./header.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const hadleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      setMessage("Login Succesfully");
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", JSON.stringify(username));
      navigate("/");
    } catch (error) {
      setMessage(error.error);
    }
  };

  return (
    <>
    <Header/>
    <div>
      <form className="login" onSubmit={hadleLogin}>
        <h1>Login</h1>
        <input
          type="text"xs
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Sign in</button>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div></>
  );
}
export default Login;
