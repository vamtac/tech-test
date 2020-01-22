
import React from 'react';
import { Link } from "react-router-dom";
import Pin from "../modules/generate-pin";
import './generate.css';


const Generate:React.FC = () => {
    return (
        <div className="generatePinContent">
            <Pin/>
            <button id="generateNewPin">GENERATE</button>  
            <Link to="/save">SAVE</Link>
        </div>
    );
  }


export default Generate;