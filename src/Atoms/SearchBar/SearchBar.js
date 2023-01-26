import searchbar from '../SearchBar/searchbar.module.css'
import {BsSearch} from 'react-icons/bs'

const SearchBar = (props) => {
    
    return (
        <div>
            <input onChange={props.onChange} className={searchbar.Search} /> 
        </div>
    )
}

export default SearchBar