import './App.css'
import search_icon from "../public/assets/search.png"

function App() {

  return (
    <div className='container'>
      <div className='card'>
        <div className='header'>
          <input type='text' className='search_bar' placeholder='Search' />
          <div className='search-icon'>
            <img src={search_icon} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
