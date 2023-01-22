import addbutton from '../AddButton/addbutton.module.css'
import {AiFillPlusCircle} from 'react-icons/ai'

const AddButton = () => {
    
    return (
        <div className={addbutton.mainComponent}>

        <button className={addbutton.AddButton}><span className={addbutton.Icon}><AiFillPlusCircle /></span></button>

        </div>
    )
}

export default AddButton