import {Data} from '../../Constants/Data'
import {FaUserCircle} from 'react-icons/fa'
import card from './card.module.css'

const Card = () => {
    return (
        <div>
            {Data.map((element) => <p className={card.container}>
            <span className={card.Icon}><FaUserCircle /></span>

            <div className={card.wrapper}><h4 className={card.name}> {element.Name}</h4>  
             {element.Email}</div>
             
              </p> )}
        </div>
    )
}

export default Card