import './App.css'

import SearchBar from './Components/SearchBar'
import Information from './Components/Information'
import BottomInformation from './Components/BottomInformation'

function App() {

  return (
    <div className='container'>
      <div className='card'>
        <SearchBar />
        <Information />
        <BottomInformation />
      </div>
    </div>
  )
}

export default App
