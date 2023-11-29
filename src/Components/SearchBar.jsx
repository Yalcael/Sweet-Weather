import search_icon from "/assets/search.png"
import './SearchBar.css'

const SearchBar = () => {

    return (
        <div className='header'>
            <input type='text' className='search_bar' placeholder='Search' />
            <div className='search-icon'>
                <img src={search_icon} alt='' />
            </div>
        </div>
    )
}

export default SearchBar
