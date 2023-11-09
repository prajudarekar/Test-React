import Test from "./SigninComponents/Test";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
//import Home from './Home';
import HyphenDashboard from "./DashboardComponents/HyphenDashboard";
//import HyphenUserRole from "./HyphenUserComponents/HyphenUserRole";
//import HyphenUserCreation from "./HyphenUserComponents/HyphenUserCreation";

import HyphenClientOnboarding from './HyphenUserComponent/HyphenClientOnboarding';
import LoginForm from './SigninComponents/LoginForm';
//import GlobalStyle from "./Theme/GlobalStyle";
import Myform from './Myform';
import Test1 from "./SigninComponents/Test1";
function App() {
  return (
    <div>
      {/*   <HyphenClientOnboarding/>
   
  <HyphenUserCreation/>

     <HyphenUserRole/>
  */}
  

  <Router>
     

<Routes>
  <Route path="/" element={<LoginForm/>}/>
  <Route path="/Dashboard" element={<HyphenDashboard/>}/>
  <Route path="/HyphenClientOnboarding" element={<HyphenClientOnboarding/>}/>


</Routes>

  </Router>

         </div>
  );
}

export default App;
