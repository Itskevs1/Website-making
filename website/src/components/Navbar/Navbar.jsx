import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import Login from "../Login/Login"; 

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openLogin = (login) => {
    setIsLogin(login);
    setIsLoginOpen(true);
  };

  return (
    <div className="navbar">

      <div className="picture">
        <img src={assets.hamburger} alt="" className="hamburger" />
        <img src={assets.ustpfoodlogo} alt="" className="ustpfoodlogo" />
      </div>

      <ul className="navbar-menu">
        <Link to="/">
          <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        </Link>
        <Link to="/stores">
          <li onClick={() => setMenu("stores")} className={menu === "stores" ? "active" : ""}>Stores</li>
        </Link>
        <Link to="/about-us">
          <li onClick={() => setMenu("about-us")} className={menu === "about-us" ? "active" : ""}>About Us</li>
        </Link>
        <Link to="/contact-us">
          <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
        </Link>
        <Link to="/feedback">
          <li onClick={() => setMenu("feedback")} className={menu === "feedback" ? "active" : ""}>Feedback</li>
        </Link>
        <Link to="/faq">
          <li onClick={() => setMenu("faq")} className={menu === "faq" ? "active" : ""}>FAQ</li>
        </Link>
      
      </ul>
      
      <div className="navbar-right">
        <button className="login" onClick={() => openLogin(true)}>Login</button>
        <button className="signup" onClick={() => openLogin(false)}>Sign Up</button>
      </div>

      {/* Render */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default Navbar;
