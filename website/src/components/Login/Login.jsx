import React from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ isOpen, onClose, isLogin, setIsLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Left Panel */}
        {!isLogin ? (
          <div className="left-panel white-bg slide">
            <h2>SIGN UP</h2>
            <form className="form">
              <div className="input-container">
                <input className="usernames" type="text" placeholder="First Name" />
                <input className="usernames" type="text" placeholder="Last Name" />
              </div>
              
              <div className="input-container">
                <input className="password" type="text" placeholder="ID Number" />
              </div>
              <p className="Birthday">Birthday</p>
              <div className="input-container">
                <input className="date" type="date" placeholder="Birthday" />
                <select className="select">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>

                </select>
              </div>
              <div className="input-container">
                <input className="password" type="email" placeholder="Email" />
              </div>
              <div className="input-container">
                <input className="password" type="password" placeholder="New Password" />
              </div>
              <div className="input-container">
                <input className="password" type="password" placeholder="Confirm Password" />
              </div>
              <button className="btn">Sign Up</button>
            </form> 
          </div>
        ) : (
          <div className="left-panel yellow-bg slide">
            <img src={assets.ustplogoorig} alt="USTP Logo" className="ustp-logo" />
            <h2>Hello, Trailblazer!</h2>
            <p>Unlock the experience—sign up and start now!</p>
            <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>Sign Up</button>
          </div>
        )}

        {/* Right Panel */}
        {isLogin ? (
          <div className="right-panel white-bg slide">
            <h2>LOGIN</h2>
            <form className="form">
              <div className="input-container">
                <img src={assets.profile} alt="Profile" className="icon" />
                <input className="user" type="text" placeholder="Username" />
              </div>
              <div className="input-container">
                <img src={assets.key} alt="Key" className="icon" />
                <input className="user" type="password" placeholder="Password" />
              </div>
              <a href="#" className="forgot">Forgot Password?</a>
              <button className="btn">Log In</button>
            </form>
          </div>
        ) : (
          <div className="right-panel yellow-bg slide">
            <img src={assets.ustplogoorig} alt="USTP Logo" className="ustp-logo" />
            <h2>Welcome Back!</h2>
            <p>Stay in touch—log in and keep the connection alive!</p>
            <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;