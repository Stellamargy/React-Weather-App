import React from "react";
import "./index.css";

const WeatherData = () => {
  return (
    <div className="daily-weather-data">
      <div className="container p-0">
        <div className="row p-0">
          <div className="col-9">
            <h1 className="m-0">Nairobi</h1>
            <p className="m-0">
              <span>Monday </span>
              <time dateTime="11:03">11:03 </time>
              <span>, Mostly Cloudly</span>
            </p>
            <ul className="p-0">
              <li>
                Humidity:<span className="weather-element-unit">58%</span>
              </li>
              <li>
                Wind:<span className="weather-element-unit">8km/h</span>
              </li>
              <li>
                Precipitation:<span className="weather-element-unit">6%</span>
              </li>
            </ul>
          </div>
          <div className="col-3 temperature-wrapper">
            <div className="weather-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudly"
              />
            </div>
            <div className="temperature-container">
              <span className="temp">23</span>

              <span className="symbol">°C </span><span className="symbol"> | </span>
              <span className="symbol">°F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherData;
