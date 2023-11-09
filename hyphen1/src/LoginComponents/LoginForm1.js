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
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="aaa">password?</a>
        </p>
      </form>
      </div>
      </div>
      </div>
      </div>
        </>
    )
}

export default LoginForm;