import React from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { useState } from "react";
import { useEffect } from "react";
const WeatherForecast = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState();
  const handleForecastResponse = (response) => {
    setLoaded(true);

    setForecastData(response.data.daily);
  };

  useEffect(() => {
    setLoaded(false);
  }, [data.coordinates]);

  if (loaded) {
    return (
      <div className="weather-forecast-container  container">
        <h2 className="text-center">Weekly Forecast</h2>
        <div className="row">
          {forecastData.map(function dailyForecast(dailyForecastData, index) {
            if (index < 6) {
              return (
                <div
                  className="col-sm-2 text-center weather-forecast-day-container  "
                  key={index}
                >
                  <WeatherForecastDay forecastData={dailyForecastData} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const longitude = data.coordinates.lon;
    const latitude = data.coordinates.lat;

    const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=bfcoa2306cb6b50a21d693ee1219t034&units=metric`;

    axios.get(forecastUrl).then(handleForecastResponse);
    return (
      <div className="text-center">
        <p>Loading Forecast...</p>
      </div>
    );
  }
};
export default WeatherForecast;
