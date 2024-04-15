import React from 'react'
import WeatherData from './WeatherData'




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

      </div>
        
  
  )
}

export default App
