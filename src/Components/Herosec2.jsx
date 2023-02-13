import React,{Component} from 'react'
import "./Herosec2.css";
class Herosec2 extends Component {
 render(){
    return (
        <div className="hero_img2">
         <div className="hero-heading2">
             <h1>{this.props.heading}</h1>
             <p>{this.props.text}</p>
         </div>
        </div>
       )
     }
 } 

export default Herosec2;
