import React,{useState} from "react";
import Hyphenview from "../Images/hyphenview.png";
import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import '../Styles/loginstyle.css';
import Stack from "react-bootstrap/Stack";
import  {  Form} from "react-bootstrap";
//import Backlogin from "./Images/Backlogin.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Pdashboard from "../Images/Newback.png";
import { useHref } from "react-router-dom";
//import Pdashboard from "./Images/NewHypehn.jpg";
//import { Link,useHistory  } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function LoginForm() {
  //const history = useHistory();
  const navigate = useNavigate();

  const history=useHref();
  const Dashboard = () => {
      history.push("/Dashboard")
  }

  const [formData,setFormData] = useState({
    username:'',
    password:''
  })

  const handleChange = (e) => {
    e.persist();
    setFormData(prev=>(
      {
        ...prev,
        [e.target.name]: e.target.value,
      }
    ))
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
    }
    // const data = {
    //   "username": "app_admin_01",
    //   "password": "this_need_to_change_from_admin_panel"
    // }
    const data = {
      "email": formData.username,
      "password": formData.password,
    }

  
    axios.post("http://localhost:307/login",data,{headers: headers})
    .then(response=>{
      //const token = response.data.token
     // localStorage.setItem('token',token)
     // history.push('/dashboard')
      console.log("success:: "+JSON.stringify(response.data.result));
      var logmsg=response.data.result;
      navigate("/Dashboard");
      /*
      if(logmsg === "login-sucess")
      {
        alert("login Sucess");
      navigate("/Dashboard");
      }
      else if(logmsg === "No-user-found")
      {
        alert("no user Found ");
      }*/
    })
    .catch(err=>alert("Incorrect Credentials"))

  }

  return (
  <div className="global-container vh-100" style={{ backgroundImage: `url(${Pdashboard})` }}>
  <div className="card cardlogin login-form">
  <div className="card-body">
      <div className="mx-auto">
          <Form>
              <img
                src={Hyphenview}
                className="login-logo-img ml-4"
                alt="logo img"
              />
              <br></br>
              <br></br>

              <Form.Group
                className="col-md-12 mb-3"
                controlId="formBasicUsername"
              >
                <Form.Control
                  type="text"
                  className="inputfield"
                  placeholder="Username"
                  autoFocus required name='username' value={formData.username} onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="col-md-12 mb-3"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  className="inputfield"
                  placeholder="Password"
                  required  name='password' value={formData.password} onChange={handleChange}
                />
              </Form.Group>

              <Stack className="remberanforgot" direction="horizontal" gap={5}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me " />
                </Form.Group>
                <Form.Group className="ml-2 mb-5 forgot" controlId="formBasicCheckbox">
                <Button  variant="link">
                  Forgot Password?
                </Button>
                </Form.Group>
              </Stack>

              <Stack className="twobuttonlogin" direction="horizontal" gap={3}>
                <Button as="a" className="ml-10 mb-5 loginbtn" onClick={handleSignIn}>
                  Log In
                </Button>
                <Button as="a" className="mb-5 cancelbtn" variant="secondary">
                  Cancel
                </Button>
              </Stack>
            </Form>
            </div>
	</div>
</div>
</div>
 
       
  );
}
export default LoginForm;
