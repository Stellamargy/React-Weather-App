import React from 'react';
import WeatherData from './WeatherData';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';



function App() {

  return (
    
      <div className='app-wrapper'>
       <div className='search-form'>
        <form >
          <input type="search"  placeholder="Enter a City..."  required/>
          <input type="submit" value="Search" />
        </form>
      </div>
      <WeatherData/>
      <Footer/>
      </div>
        
  
  )
}

export default App
