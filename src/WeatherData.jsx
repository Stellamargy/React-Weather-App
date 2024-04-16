import React from "react";

const WeatherData = () => {
  return (
    <div className="daily-weather-data">
      <h1>Nairobi</h1>
      <p>
        <span>Monday </span>
        <time dateTime="11:03">11:03  </time>
        <span>, Mostly Cloudly</span>
      </p>
      <ul>
        <li>Humidity:<span>58%</span></li>
        <li>Wind:<span>8km/h</span></li>
        <li>Precipitation:<span>6%</span></li>
      </ul>
      <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudly" />
      <span>23</span>
      <span>°C |</span>
      <span>°F</span>
    </div>
  );
};
export default WeatherData;
