import React from 'react';
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
    <div className="container skills" id="skills">
     <u> <h1 class="one">Skills</h1></u>
      <div className="items" >
      {skills.map((data)=>(
        <>
       
          <div className="item" key={data.id}
          data-aos="flip-left"
          data-aos-duraion="1000"
          >
            <img src={`/assets/${data.imageSrc}`} alt="no"/>
            <h3>{data.title}</h3>
          </div>
        

        </>

      ))}
    </div>
    </div>
    </>
  )
}

export default Skills;
