import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Gstyle.css";
import { MdDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import boy from "../Image/boys.jpg"
import { CiDeliveryTruck } from "react-icons/ci";

const Navbar = () => {
  const auth = localStorage.getItem("User");
  const nevigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();
    nevigate("/login");
  };

  return (
    <div className="Nav-Container">
      <div className="Nav-list">
        <div>
          <h2>Visualization Dashboard</h2>
        </div>
        <div className="Nav-imag">
          <img src={boy} alt="boy"/>
        </div>
        <div>
          {auth ?  <ul className="list-data">
            <li>
              <MdDashboard className="Nav-icon"/>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <MdEmail className="list-data"/>
              <Link to='/email'>Email</Link>
            </li>
            <li>
              <IoChatboxEllipses className="list-data"/>
              <Link to='/contact'>Chat</Link>
            </li>
            <li>
               <FaUser className="list-data"/>
              <Link to='/user'>User</Link>
            </li>
            <li>
              <FaCalendarAlt className="list-data"/>
              <Link to='calender'>Calender</Link>
            </li>
            <li>
              <CiDeliveryTruck className="list-data"/>
              <Link to='/logistic'>Logistic</Link>
            </li>
            <li>
               <FaFileInvoice className="list-data"/>
              <Link to='/invoice'>Invoice</Link>
            </li>
            <li>
              <CiLogout className="Nav-icon"/>
              <Link onClick={LogOut} to="/login">
                LogOut
              </Link>
            </li>
             </ul>
            
            :

            <ul className="Nav-list-botoom">
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
