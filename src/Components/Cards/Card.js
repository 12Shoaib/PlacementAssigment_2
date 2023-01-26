import {FaUserCircle} from 'react-icons/fa'
import card from './card.module.css'
import { atomState , isClickedValue ,clickedIndexValue} from '../../Recoil/RecoilAtom'
import {useRecoilValue , useRecoilState} from 'recoil'

const Card = () => {
    const recoilData = useRecoilValue(atomState)
    const [isClicked , setIsClicked] = useRecoilState(isClickedValue)
    const [indexValue , setIndexValue] = useRecoilState(clickedIndexValue)

    const handleClick = (i) => {
        setIsClicked([recoilData[i]])
        setIndexValue(i)      
    }

    return (
        <div>
            {recoilData.map((element ,i) => <p onClick={() => handleClick(i)} className={card.container}>
            <span className={card.Icon}><FaUserCircle /></span>

            <div  className={card.wrapper}><h4  className={card.name}> {element.Name}</h4>  
             {element.Email}</div>
             
              </p> )}
        </div>
    )
}

export default Card



  // let Data =isClicked.map((element , index) => element[index].Name === element[indexValue].Name)
        // setIsClicked((prev) => prev[i].isLogIn = false)  