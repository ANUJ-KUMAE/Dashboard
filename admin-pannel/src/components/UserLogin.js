import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Gstyle.css";
import boy from "../Image/Dvistu.jpg"

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("User");
    if (auth) {
      nevigate("/");
    }
  });

  const HandleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    //console.warn(result);
    if (result.email) {
      localStorage.setItem("User", JSON.stringify(result));
      nevigate("/");
    } else {
      alert("Please Enter Correct details");
    }
  };

  return (
    <div className="Login-Container">
      <div className="log-cont">
        <div className="lo-images">
          <img src={boy} alt="Images" />
        </div>
        <div className="lo-input">
          <div className="input-cont">
            <h2>Login</h2>
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
            <button type="submit" onClick={HandleLogin} className="btn">
              Login
            </button>
            <p>If don't have an Account press here <Link to='/signup'>SignUp</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
