import React from 'react'
import "../DashboardComponents/Mystyle.css";
const Mysidebar = () => {
  return (
    <div>
      <div class="row">
  
  <div class="col-md-1 col-lg-1  px-6">
      <ul class="nav flex-column sidevav ">
      <li class="nav-item dropdown customsidebar">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-th-large"></span>Widget</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
         <a class="dropdown-item" href="#">widget 1</a>
          <a class="dropdown-item" href="#">widget2</a>

          </div>
      </li>
      <li class="nav-item customsidebar">

  
  <a class="nav-link navbtn" href="#" data-toggle="modal" data-target="#exampleModal"><span class="glyphicon glyphicon-signal"></span>Charts
     </a>
    
 
 
    </li>
 
<li class="nav-item customsidebar">
          <a class="nav-link" href="#"><span class="glyphicon glyphicon-signal"></span><br/>Text</a>
        </li>


        <li class="nav-item customsidebar">
          
  <a class="nav-link navbtn" href="#" data-toggle="modal" data-target="#tableModal"><span class="glyphicon glyphicon-signal"></span><br/>Tables
  </a>
  </li>
        
        <li class="nav-item customsidebar">
          <a class="nav-link " href="#"><span class="glyphicon glyphicon-signal"></span><br/>Embed</a>
        </li>
        <li class="nav-item customsidebar">
          <a class="nav-link pb-8" href="#"><span class="glyphicon glyphicon-signal"></span><br/>Filter</a>
        </li>
           
       
               <div class="navbottom"></div>
    </ul>
  </div>
  <div class="col-md-11 col-lg-11 cusomcol ">
   
    <div class="row">
      <div class="col-md-12">
        <h1>svjsg</h1>
</div>
</div>
</div>
</div>

    </div>
  );
}

export default Mysidebar
