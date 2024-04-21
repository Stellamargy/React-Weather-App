import React, { useState } from "react";
import FriendlyDateFormat from "./FriendlyDateFormat";
import TemperatureConversion from "./TemperatureConversion";

const WeatherData = ({ data }) => {
  return (
    <div className="daily-weather-data">
      <div className="container p-0">
        <div className="row p-0">
          <div className="col-9">
            <h1 className="m-0 ">{data.city}</h1>
            <FriendlyDateFormat data={data} />
            <ul className="p-0">
              <li>
                Humidity:
                <span className="weather-element-unit">{data.humidity}%</span>
              </li>
              <li>
                Wind:
                <span className="weather-element-unit">{data.wind}km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-3 temperature-wrapper">
            <div className="weather-icon">
              <img src={data.icon} alt={data.description} />
            </div>
            <TemperatureConversion temperature={data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
