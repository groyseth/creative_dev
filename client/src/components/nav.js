import React from "react";
import Auth from "../utils/auth"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function Navbar() {
    const logout = () => {
        Auth.logout();
    }
    // console.log(Auth.loggedIn() ? "loggedin": "loggedout");
    
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top nav">
    <div className="container">
      
      <div  id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className=" test" to={"/sign-in"}>Login</Link>
          </li>
          <li className="nav-item ">
            <Link className=" test" to={"/sign-up"}>Sign up</Link>
          </li>
          
          
     
          <li className="nav-item">
          <Link className=' test' onClick={logout}>Logout</Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>

  );
}