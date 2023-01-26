import leftsection from '../LeftSection/leftsection.module.css'
import SearchBar from '../../Atoms/SearchBar/SearchBar'
import AddButton from '../../Atoms/AddButton/AddButton'
import Card from '../../Components/Cards/Card'
import {SearchValue , atomState} from '../../Recoil/RecoilAtom'
import { useRecoilState} from 'recoil'
import { useEffect } from 'react'
import DialogBox from '../../Components/DialogBox/DialogBox'


const LeftSection = () => {
    const [searchCapture , setSearchCapture ] = useRecoilState(SearchValue)
    const [Data , setData]= useRecoilState(atomState)

    useEffect(() => {       //Updating the recoil hook beacuse i was not getting the updated value
    }, [Data]);
    
    function Capture(e) {
       setSearchCapture(e.target.value)
       const newData =  Data.filter((element) => {
        return element.Name.includes(searchCapture)
       })
       setData(newData)
       
    }
    

    return (
        <div className={leftsection.mainComponent}>

         <div className={leftsection.header}>   
            <SearchBar onChange={Capture} />
            {/* <AddButton /> */}
            <DialogBox />
        </div>
        <div className={leftsection.scrollContainer}>
        <Card />
        </div>
            
        </div>
    )
}

export default LeftSection