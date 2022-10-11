import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();

    const user = { username, password };

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_NOTEITAPP_BACKEND}users/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    })
      .then((res) => {
        console.log("User Logged In");
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/dashboard");
      })
      .catch((e) => {
        alert("Authentication Failed ");
        setUsername("");
        setPassword("");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const user = { username, password };

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_NOTEITAPP_BACKEND}users/create`,
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    })
      .then((res) => {
        console.log("New user created");
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((e) => {
        alert(e);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <div className="Signin">
      <h1 className="SigninHead">noteIT</h1>
      <div className="SigninForm">
        <form>
          <div className="FormUsername">
            <span className="FormLabel">Username</span>
            <input
              type="text"
              className="FormInput"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="FormPassword">
            <span className="FormLabel">Password</span>
            <input
              type="password"
              className="FormInput"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="FormBtns">
            <button className="Btns " onClick={handleSignin}>
              LogIn
            </button>
            <button className="Btns registerBtn" onClick={handleRegister}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
