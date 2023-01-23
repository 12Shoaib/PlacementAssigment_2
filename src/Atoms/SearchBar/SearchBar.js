import searchbar from '../SearchBar/searchbar.module.css'
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
    
    return (
        <div>
            <input className={searchbar.Search} /> 
        </div>
    )
}

export default SearchBar