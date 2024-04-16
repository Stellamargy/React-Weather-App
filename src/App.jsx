import React from "react";
import WeatherData from "./WeatherData";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <form>
          <div className="container">
            <div className="row">
              <div className="col-9  p-0">
                <input
                  className="city-input"
                  type="search"
                  placeholder="Enter a city..."
                  required
                />
              </div>
              <div className="col-3 " >
                <input className="search-btn" type="submit" value="Search" />
              </div>
            </div>
          </div>
        </form>
      </header>
      <main>
        <WeatherData />
      </main>
      <Footer />
    </div>
  );
}

export default App;
