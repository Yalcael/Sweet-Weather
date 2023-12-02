import './MiddleInformation.css'
// import clouds_icon from "/assets/clouds.png"

const MiddleInformation = ({weather_icon, weather_degree, weather_city}) => {
  return (
    <div className='Middle-info'>
      <div className='weather-icon'>
        <img src={weather_icon} alt='' />
      </div>
      <div className='weather-degree'>
        {weather_degree} °C
      </div>
      <div className='weather-city'>
        {weather_city}
      </div>
    </div>
  )
}

export default MiddleInformation
