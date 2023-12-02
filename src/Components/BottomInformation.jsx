import './BottomInformation.css'
import humidity_icon from "/assets/humidity.png"
import wind_icon from "/assets/wind.png"
import sunrise_icon from "/assets/sunrise.png"
import sunset_icon from "/assets/sunset.png"

const BottomInformation = ({humidity, wind, sunrise, sunset}) => {
  return (
    <div className='bottom-info'>
      <div className='elements'>
        <img src={humidity_icon} alt='' />
        <div className='data'>
          <div className='humidity-info'>{humidity}</div>
          <div className='text'>Humidity</div>
        </div>
      </div>
      <div className='elements'>
        <img src={wind_icon} alt='' />
        <div className='data'>
          <div className='wind-info'>{wind}</div>
          <div className='text'>Wind Speed</div>
        </div>
      </div>
      <div className='elements'>
        <img src={sunrise_icon} alt='' />
        <div className='data'>
          <div className='sunrise-info'>{sunrise}</div>
          <div className='text'>Sunrise Time</div>
        </div>
      </div>
      <div className='elements'>
        <img src={sunset_icon} alt='' />
        <div className='data'>
          <div className='sunset-info'>{sunset}</div>
          <div className='text'>Sunset Time</div>
        </div>
      </div>
    </div>
  )
}

export default BottomInformation