import "./App.css";
import ReactBootstrap from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Nav_bar from "./Navbar/Navbar";
import {Routes,Route} from "react-router-dom"
import About from "./About me/About";
import Home from "./Home/Home"
import ContactMe from "./contactMe/ContactMe"
function App() {
  return (
    <div id="APP" className="App">
      <Nav_bar />
      <Home/>
      <About/>
      <ContactMe/>
     {/* <Routes> */}
      {/* <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} /> */}
      {/* <Route path="/" element={<Home/>} /> */}
     {/* </Routes> */}
    </div>
  );
}

export default App;
