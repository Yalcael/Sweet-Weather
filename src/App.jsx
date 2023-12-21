import './App.css'

import SearchBar from './Components/SearchBar'
import MiddleInformation from './Components/MiddleInformation'
import BottomInformation from './Components/BottomInformation'
import clouds_icon from "/assets/clouds.png"
import clear_icon from "/assets/clear.png"
import drizzle_icon from "/assets/drizzle.png"
import mist_icon from "/assets/mist.png"
import rain_icon from "/assets/rain.png"
import snow_icon from "/assets/snow.png"
import fog_icon from "/assets/fog.png"
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [city, setCity] = useState('Paris')
  const [information, setInformation] = useState({})
  
  useEffect(() => {
    const icon_mapping = {
      "Clouds": clouds_icon,
      "Clear": clear_icon,
      "Drizzle": drizzle_icon,
      "Mist": mist_icon,
      "Rain": rain_icon,
      "Snow": snow_icon,
      "Fog": fog_icon,
    }
    const getWeatherData = async () => {
      try {
        const api_key = import.meta.env.VITE_WEATHER_API_KEY
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        const sunrise_time = new Date((json.sys.sunrise + json.timezone - 3600) * 1000);
        const sunset_time = new Date((json.sys.sunset + json.timezone - 3600) * 1000);

        setInformation({
          weather_icon: icon_mapping[json.weather[0].main],
          weather_degree: Math.round(parseInt(json.main.temp)),
          weather_city: json.name,
          humidity: json.main.humidity,
          wind: json.wind.speed,
          sunrise: sunrise_time.getHours() + ":" + sunrise_time.getMinutes(),
          sunset: sunset_time.getHours() + ":" + sunset_time.getMinutes(),
        })
        console.log(json);
      } catch (error) {
        console.log('There was an error', error)
      }
    }
    getWeatherData()
  }, [city])


  return (
    <div className='container'>
      <div className='card'>
        <SearchBar setCity={setCity} />
        <MiddleInformation weather_icon={information.weather_icon} weather_degree={information.weather_degree} weather_city={information.weather_city} />
        <BottomInformation humidity={information.humidity} wind={information.wind} sunrise={information.sunrise} sunset={information.sunset} />
      </div>
    </div>
  )
}

sdlfkgblskdfngklsjnfgkj
export default App
