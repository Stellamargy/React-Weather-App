import React from "react";
import axios from "axios";
import WeatherForecastDay  from "./WeatherForecastDay"
import { useState } from "react";
const WeatherForecast = ({ city }) => {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState();
  const handleForecastResponse = (response) => {
    setLoaded(true);

    setForecastData(response.data.list);
  };

  if (loaded) {
    return (
      <div className="weather-forecast-container  container">
        <h2 className="text-center">Weekly Forecast</h2>
        <div className="row">
        
          {
            forecastData.map(function dailyForecast(dailyForecastData,index){
              
                if(index<6){
                 return(
                  <div className="col-sm-2 text-center weather-forecast-day-container ">
                  <WeatherForecastDay forecastData={dailyForecastData}/>
             </div>
                 )
                }
            
            })
          }
         </div>
        </div>
      
    );
  } else {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=73a00877081bd43422bdee0f3022beb5&units=metric`;
    axios.get(forecastUrl).then(handleForecastResponse);
    return (
      <div className="text-center">
        <p>Loading Forecast...</p>
      </div>
    );
  }
};
export default WeatherForecast;
