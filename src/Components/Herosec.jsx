import React from 'react'
import "./Herosec.css";
import {Link} from "react-router-dom"
const Herosec = () => {
  return (
    <div className='hero'>
        <div className="mask">
           <img className='introimg' src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?cs=srgb&dl=pexels-negative-space-169573.jpg&fm=jpg" alt="heroimg" /> 
        </div>
      <div className="contant">
        <p>Hi i'm a </p>
        <h1>Developer</h1>
        <div className='btn-div'>
            <Link to="/project" className='btn'>Project</Link>
            <Link to="/contact" className='btn-2'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Herosec;
