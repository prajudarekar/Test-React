import React from "react";
import "../BootLogin/login.css";
import Pdashboard from "../Images/Newback.png";
import '../App.css';
import Button from "react-bootstrap/Button";
import Hyphenview from "../Images/hyphenview.png";

import Stack from "react-bootstrap/Stack";

function Login1(){
    return(
        <div>
<section className="global-container vh-100" style={{ backgroundImage: `url(${Pdashboard})` }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card " style={{borderRadius:"1rem"}}>
          <div className="card-body p-5 text-center">
        <form>
            <img
                src={Hyphenview}
                className="login-logo-img mb-5"
                alt="logo img"
              />
            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control"  placeholder="email"/>  
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control" placeholder="password"/>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input mt-3" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label mt-3" for="form1Example3"> Remember password </label>
              <Button className="forgot" variant="link">
                  Forgot Password?
                </Button>
               
            </div>

            <Stack className="twobuttonlogin" direction="horizontal" gap={3}>
                <Button as="a" className="ml-10 mb-5 loginbtn" >
                  Log In
                </Button>
                <Button as="a" className="mb-5 cancelbtn" variant="secondary">
                  Cancel
                </Button>
              </Stack>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Login1;