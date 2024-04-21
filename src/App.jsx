import React from "react";
import WeatherData from "./WeatherData";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

function App() {
  // Default City
  const[city,setCity]=useState("Nairobi") 
  const [weatherElements, setWeatherElements] = useState({ loaded: false });
  const handleResponse = (response) => {
    console.log(response);
    setWeatherElements({
      loaded: true,
      city:response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      time:new Date(response.data.dt*1000),
      icon:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }; 
 
  const fetchWeatherElements=()=>{
    const apiKey = "73a00877081bd43422bdee0f3022beb5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }



  const handleSubmit=(event)=>{
    event.preventDefault();
    fetchWeatherElements();
   
  }
  const handleCityChange=(event)=>{
    setCity(event.target.value)
  }
  if (weatherElements.loaded){
    return(
      <div className="app-container">
      <header>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row p-0">
              <div className="col-9  p-1">
                <input
                onChange={handleCityChange}
                  className="city-input"
                  type="search"
                  placeholder="Enter a city..."
                  required
                />
              </div>
              <div className="col-3 p-1" >
                <input className="search-btn" type="submit" value="Search" />
              </div>
            </div>
          </div>
        </form>
      </header>
      <main>
     <WeatherData data={weatherElements} city={city}/>
     <WeatherForecast city={city} />
      </main>
      <Footer />
    </div>

    );
  }else{
    fetchWeatherElements();
  
    return (
      <div >
        <div className="loading-spinner">
        <ClipLoader
          color="#8860F4"
          loading={true}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        Loading Weather App
        </div>
      
      </div>
    );
  }
  
}

export default App;
