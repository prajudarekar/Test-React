import React from "react";
import '../App.css';
import Pdashboard from "../Images/Newback.png";
import Hyphenview from "../Images/hyphenview.png";

function LoginForm(){
    return(
        <>
<div className="global-container" style={{ backgroundImage: `url(${Pdashboard})` }}>
  <div className="card cardlogin login-form">
  <div className="card-body">
      <div className="mx-auto">
              <form>
                <img
                src={Hyphenview}
                className="login-logo-img ml-4"
                alt="logo img"
              />
        <div className="mb-3">
          <input
            type="email"
            className="form-control inputfield"
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control inputfield"
            placeholder="password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
            <a href="wwww" className="ml-2 mb-5 forgot">Forgot Password?</a>
          </div>
        </div>
        <div className="mb-5 d-grid">
          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </div>
        
      </form>
      </div>
      </div>
      </div>
      </div>
        </>
    )
}

export default LoginForm;