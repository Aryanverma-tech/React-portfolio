import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf';
import hero from './data/hero.json';
import Typed from "typed.js";
import { GiPodiumSecond } from 'react-icons/gi';
useRef;

const Home = () => {
  const typedRef=useRef(null)
  useEffect(()=>{
    const options={
      strings:["WELCOME TO MY PROFILE","My Name is Aryan ","I'm full Stack developer "],
      typeSpeed:100,
      backSpeed:70,
      loop:true
    }
    const typed =new Typed(typedRef.current,options);
    return ()=>{
      typed.destroy();
    
    };
    
  },[]
  
    
);
  return (
    <>
    <div className="container home" id="home">
    <div className="left"  >
     <h1 ref={typedRef}></h1>
     <a href={pdf}
     
     download="Resume.pdf"
     className="btn btn-outline-warning my-3">Download Resume</a>
    </div>
    <div className="right">
      <div className="img" >
      <img src={`/assets/${hero.imgSrc}`} alt="Aryan" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Home;
