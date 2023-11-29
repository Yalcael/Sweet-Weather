import './App.css'

import SearchBar from './Components/SearchBar'
import Information from './Components/Information'

function App() {

  return (
    <div className='container'>
      <div className='card'>
        <SearchBar />
        <Information />
      </div>
    </div>
  )
}

export default App
