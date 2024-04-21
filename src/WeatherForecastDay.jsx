import React from "react";
 
const WeatherForecastDay=({forecastData})=>{
    const maxTemp=()=>{
        const maxTemperature=forecastData.main.temp_max;
        return Math.round(maxTemperature)

    }
    const minTemp=()=>{
        const mixTemperature=forecastData.main.temp_min;
        return Math.round(mixTemperature)

    }
    const day=()=>{
       const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
       const date=new Date(forecastData.dt*1000);
       const day=days[date.getDay()]
       return day;
    }
    return(
       
           <div>
             <div className="weather-forecast-day  ">
              <h3>{day()}</h3>
            </div>
            <div className="weather-forecast-icon">
              <img
                src={`https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`}
                alt="cloudly"
              />
            </div>

            <div className="weather-forecast-temperatures">
              <strong>
                <span className="weather-forecast-max-temp">{maxTemp()}° </span>
              </strong>
              <span className="weather-forecast-min-temp">{minTemp()}°</span>
            </div>
           </div>
        
    );
        
    
}
export default WeatherForecastDay;