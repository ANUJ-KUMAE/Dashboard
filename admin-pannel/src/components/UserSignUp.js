import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Gstyle.css";
import Dvistu from "../Image/Dvistu.jpg";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("User");
    if (auth) {
      nevigate("/");
    }
  });

  const SaveData = async () => {
    //console.log(email, password)

    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("User", JSON.stringify(result));
    nevigate("/");
  };

  return (
    <div className="Login-Container">
      <div className="log-cont">
        <div className="lo-images">
          <img src={Dvistu} alt="Images" />
        </div>
        <div className="lo-input">
          <div className="input-cont">
            <h2>Register</h2>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              autoComplete="off"
            />
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              autoComplete="off"
            />
            <button type="submit" onClick={SaveData} className="btn">
              Sign Up
            </button>
            <p>If already have an Account press here <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
