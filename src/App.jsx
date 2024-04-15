import React from 'react'
import WeatherData from './WeatherData'
import Footer from './Footer'



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
