import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(()=>{
    AOS.init();

  },[]);

  return (
    <>
    <Navbar/>
    <div className="container">
      <Home/>
      <Skills/>
      <br></br>
      <br></br>
      <Projects/>
      <br></br>
      <br></br>
      <Contact/>
    </div>
      
    

    </>
  )
}

export default App;
