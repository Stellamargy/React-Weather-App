import React from "react";

const WeatherData=()=>{

    return(
        <div className="daily-weather-data">
            <h1 className="city-name">Nairobi</h1>
            <p className="day-time">Monday 12:00</p>
            <p className="weather-description">Mostly Cloudly</p>
            <img className="weather-icon" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudly" />
            <span className="weather-temperature">24</span>
            <span> °C</span> |
           {""} <span>°F</span>
           <ul className="weather-elements">
            <li>Precipitation</li>
            <li>Humidity</li>
            <li>Wind</li>

           </ul>
        </div>
    )
}
export default WeatherData;