import React from "react";
 
const WeatherForecastDay=({forecastData})=>{
   
    const maxTemp=()=>{
        const maxTemperature=forecastData.temperature.maximum;
        return Math.round(maxTemperature)

    }
    const minTemp=()=>{
        const mixTemperature=forecastData.temperature.minimum;
        return Math.round(mixTemperature)

    }
    const day=()=>{
       const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
       const date=new Date(forecastData.time*1000);
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
                src={forecastData.condition.icon_url}
                alt={forecastData.condition.icon}
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
