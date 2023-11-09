//import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
//import {MemoryRouter as Router,Route,Routes,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/About/:fname/:lname" element={<About/>}/>
  <Route path="/Contact" element={<Contact/>}/>


</Routes>
    </Router>
    </div>
  );
}

export default App;
