import './Information.css'
import clouds_icon from "/assets/clouds.png"

const Information = () => {

  return (
    <div className='Middle-info'>
      <div className='weather-icon'>
        <img src={clouds_icon} alt='' />
      </div>
      <div className='weather-degree'>
        20 °C
      </div>
      <div className='weather-country'>
        London
      </div>
    </div>
  )
}

export default Information
