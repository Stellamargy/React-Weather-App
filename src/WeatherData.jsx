import React, { useState } from "react";
import FriendlyDateFormat from "./FriendlyDateFormat";

const WeatherData=({data})=>{
  const[units,setUnits]=useState(data.temperature)
  let clicked=true;
  console.log(clicked);
  const handleFarenheitUnits=()=>{
    if(clicked){
     // (0°C × 9/5) + 32 = 32°F
     const fahrenheit=Math.round((units)*9/5+32);
     setUnits(fahrenheit) // (0°C × 9/5) + 32 = 32°F
    
     console.log(clicked)
    }
    
    clicked=false;

  }
  
  
  const handleCelciusUnit=()=>{
    setUnits(Math.round(data.temperature))
  }
 

  return(
    <div className="daily-weather-data">
    <div className="container p-0">
      <div className="row p-0">
        <div className="col-9">
          <h1 className="m-0 te">{data.city}</h1>
          <FriendlyDateFormat data={data}/>
          <ul className="p-0">
            <li>
              Humidity:
              <span className="weather-element-unit">
                {data.humidity}%
              </span>
            </li>
            <li>
              Wind:
              <span className="weather-element-unit">
                {data.wind}km/h
              </span>
            </li>
            
          </ul>
        </div>
        <div className="col-3 temperature-wrapper">
          <div className="weather-icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt={data.description}
            />
          </div>
          <div className="temperature-container">
            <span className="temp">
              {Math.round(units)}
            </span>

            <span className="symbol" onClick={handleCelciusUnit}>°C </span>
            <span className="symbol"> | </span>
            <span className="symbol" onClick={handleFarenheitUnits}>°F</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default WeatherData;