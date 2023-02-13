import React from "react";
import "./index.css";
import {Routes,Route} from "react-router-dom"
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Projects from "./Routes/Projects";
function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Routes>
      <Route path="/about" element={<About/>} />
    </Routes> <Routes>
      <Route path="/contact" element={<Contact/>} />
    </Routes> <Routes>
      <Route path="/Project" element={<Projects/>} />
    </Routes>
  </div>;
}

export default App;
