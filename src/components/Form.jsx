import React, { useState } from "react";
import "./form.css";
import emailIcon from "./assets/email.png";
import userIcon from "./assets/person.png";
import passwordIcon from "./assets/password.png";
const Form = () => {
  const [value, setValue] = useState("Sign Up");
  return (
    <>
      <div className="container">
        <div className="header">
          <h2>{value}</h2>
          <div></div>
        </div>
        <div className="form">
          {value === "Log In" ? (
            <div></div>
          ) : (
            <div className="formItem">
              <img src={userIcon} alt="Icon for username" />
              <input type="text" placeholder="your names" />
            </div>
          )}

          <div className="formItem">
            <img src={emailIcon} alt="the icon bar for email" />
            <input type="Email" placeholder="your Email" required />
          </div>
          <div className="formItem">
            <img src={passwordIcon} alt="ishusho yi ikigufuri" />
            <input type="password" placeholder="enter a correct password" />
          </div>
        </div>
        {value === "Log In" ? (
          <div></div>
        ) : (
          <div className="forget">
            Lost password <span>Click here</span>
          </div>
        )}

        <div className="submitElement">
          <div
            className={value === "Log In" ? "submit gray" : "submit"}
            onClick={() => {
              setValue("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={value === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setValue("Log In");
            }}
          >
            Log In
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
