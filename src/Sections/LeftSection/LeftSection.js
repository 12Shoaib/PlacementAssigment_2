import leftsection from '../LeftSection/leftsection.module.css'
import SearchBar from '../../Atoms/SearchBar/SearchBar'
import AddButton from '../../Atoms/AddButton/AddButton'
import Card from '../../Components/Cards/Card'

const LeftSection = () => {

    return (
        <div className={leftsection.mainComponent}>

         <div className={leftsection.header}>   
            <SearchBar />
            <AddButton />
        </div>
        <Card />
        </div>
    )
}

export default LeftSection