import React from "react";
import "./Body.css";
import insta from "../component/Assets/insta.png";
import fbicon from "../component/Assets/fb-icon.png";
const Body = () => {
  return (
    <div className="container">
      <div className="center">
        <div className="header">
          <img src={insta} alt="" className="insta-img" />
        </div>
        <div className="inputElement">
          <input
            type="text"
            placeholder="Phone number, email, or username"
            className="inputText"
          />
          <input type="Password" placeholder="password" className="inputText" />
          <input type="submit" value={"Log in"} className="inputButton" />
          <div className="line">
            <span className="arrow"></span>
            <span className="content">OR</span>
            <span className="arrow"></span>
          </div>
          <div className="social_icon">
            <img src={fbicon} alt="" className="fb-img" />
            <span>Log in with Facebook</span>
          </div>
          <div className="forgetPassword">Forget PAssword?</div>
        </div>
      </div>
      <div className="footer">
        <p>
          Don't have a account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Body;
