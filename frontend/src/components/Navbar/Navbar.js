import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const token = localStorage.getItem("token");

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_NOTEITAPP_BACKEND}users/logout`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const isTokenExists = localStorage.getItem("token");
      if (isTokenExists) {
        localStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  const handleDeleteAcc = () => {
    const token = localStorage.getItem("token");

    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_NOTEITAPP_BACKEND}users/delete`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log("User Account Deleted");
      localStorage.removeItem("token");
      navigate("/");
    });
  };

  return (
    <div className="Navbar">
      <div className="NavTitle">
        <Link className="NavTitle" to="/dashboard">
          <h1 className="Titletext">noteIT</h1>
        </Link>
      </div>
      <div className="NavRouters">
        <Link className="NavRouters routes" to="/dashboard">
          <span className="routes">Home</span>
        </Link>
      </div>
      <div className="NavBtns">
        <button className="CreateNote" onClick={handleSignOut}>
          Sign Out{" "}
        </button>
        <button className="CreateNote DelAccountBtn" onClick={handleDeleteAcc}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
