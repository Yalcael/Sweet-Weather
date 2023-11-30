import './App.css'

import SearchBar from './Components/SearchBar'
import Information from './Components/Information'
import BottomInformation from './Components/BottomInformation'
import humidity_icon from "/assets/humidity.png"
import wind_icon from "/assets/wind.png"
import sunrise_icon from "/assets/sunrise.png"
import sunset_icon from "/assets/sunset.png"

function App() {

  return (
    <div className='container'>
      <div className='card'>
        <SearchBar />
        <Information />
        <BottomInformation />
      </div>
        <div className='elements'>
          <img src={humidity_icon} alt='' />
          <div className='data'>
            <div className='humidity-info'>50%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='elements'>
          <img src={wind_icon} alt='' />
          <div className='data'>
            <div className='wind-info'>9 km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
        <div className='elements'>
          <img src={sunrise_icon} alt='' />
          <div className='data'>
            <div className='sunrise-info'>8h34</div>
            <div className='text'>Sunrise Time</div>
          </div>
        </div>
        <div className='elements'>
          <img src={sunset_icon} alt='' />
          <div className='data'>
            <div className='sunset-info'>17h42</div>
            <div className='text'>Sunset Time</div>
          </div>
        </div>
    </div>
  )
}

export default App
