import {FaUserCircle} from 'react-icons/fa'
import card from './card.module.css'
import { atomState } from '../../Recoil/RecoilAtom'
import {useRecoilValue} from 'recoil'

const Card = () => {
    const recoilData = useRecoilValue(atomState)
    
    return (
        <div>
            {recoilData.map((element) => <p className={card.container}>
            <span className={card.Icon}><FaUserCircle /></span>

            <div className={card.wrapper}><h4 className={card.name}> {element.Name}</h4>  
             {element.Email}</div>
             
              </p> )}
        </div>
    )
}

export default Card