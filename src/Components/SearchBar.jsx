import search_icon from "/assets/search.png"
import './SearchBar.css'
import { useState } from "react"

const SearchBar = ({setCity}) => {
    const [search, setSearch] = useState("")

    return (
        <div className='header'>
            <input type='text' className='search_bar' placeholder='Search' onChange={e => setSearch(e.target.value)}/>
            <div className='search-icon' onClick={() => setCity(search)}>
                <img src={search_icon} alt='' />
            </div>
        </div>
    )
}

export default SearchBar
