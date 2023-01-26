import addbutton from '../AddButton/addbutton.module.css'
import {AiFillPlusCircle} from 'react-icons/ai'

const AddButton = (props) => {
    
    return (
        <div className={addbutton.mainComponent}>

        <button onClick={props.onClick} className={addbutton.AddButton}><span className={addbutton.Icon}><AiFillPlusCircle /></span></button>

        </div>
    )
}

export default AddButton