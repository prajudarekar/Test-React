import React from "react";
import {useNavigate,useParams,useLocation} from "react-router-dom";

function About(props){
   // var navigate=useNavigate();
//var navi=useHistory();
var {fname,lname}=useParams();
var location=useLocation();

    function gotocontact(){
      //nnn  alert("hii");
        //navigate("/Contact");
    
    }
    return(
        <div>
            <h1>about us</h1>
            <h1>{fname} {lname}</h1>
            <p>{location.pathname}</p>
<button type="submit" onClick={gotocontact}>go to contact</button>
        </div>
    )
}

export default About;