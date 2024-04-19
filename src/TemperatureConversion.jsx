import React from "react";
import { useState } from "react";
const TemperatureConversion = ({ temperature }) => {
  const [unit, setUnit] = useState("celcius");
  const convertToFarenheit=(event)=>{
    event.preventDefault()
   
    setUnit("farenheit")
};
const convertToCelcius=(e)=>{
    e.preventDefault();
    setUnit("celcius")
}
  if (unit === "celcius") {
    
    return (
      <div className="temperature-container">
        <span className="temp">{Math.round(temperature)}</span>

        <span className="symbol">°C | <a href="/" onClick={convertToFarenheit}>°F</a></span>
        
      </div>
    );
  }else{
   
    return(
      <div className="temperature-container">
        <span className="temp">{Math.round((temperature)*9/5+32)}</span>
        <span className="symbol"><a href="/" onClick={convertToCelcius}>°C </a>| °F</span>
        
      </div>
    )
  }
};
export default TemperatureConversion;
