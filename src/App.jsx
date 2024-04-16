import React from "react";
import WeatherData from "./WeatherData";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <div className="form-container">
        <form>
          <input
            className="city-input"
            type="search"
            placeholder="Enter a city..."
            required
          />
          <input className="search-btn" type="submit" value="Search" />
        </form>
      </div>
      <WeatherData />
      <Footer/>
    </div>
  );
}

export default App;
