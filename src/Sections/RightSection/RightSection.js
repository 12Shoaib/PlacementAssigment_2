import rightsection from '../RightSection/rightsection.module.css'
import { atomState, isClickedValue , clickedIndexValue } from '../../Recoil/RecoilAtom'
import {useRecoilValue , useRecoilState} from 'recoil'
import {FaUserCircle} from 'react-icons/fa'
import DeleteButton from '../../Atoms/DeleteButton/DeleteButton'
import EditButton from '../../Atoms/EditButton/EditButton'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import { useEffect } from 'react'


const RightSection = () => {
    const renderingObj = useRecoilValue(isClickedValue)
    const [Data , setData] = useRecoilState(atomState)
    const indexValue = useRecoilValue(clickedIndexValue)

    const Deletion = () => {
     const newData = [...Data]   
     newData.splice(indexValue ,1)
     setData([...newData])
     if(renderingObj.Name === newData[indexValue].Name){
        //Delete the obj
     }
    } 

    return (
        <div className={rightsection.mainComponent}>
          {renderingObj.map((element) => <div className={rightsection.container}>
           <div className={rightsection.header}>
            <div className={rightsection.profile}>
            <p className={rightsection.Icon}><FaUserCircle /></p>
            <h2 className={rightsection.Name}>{element.Name}</h2>
            <p className={rightsection.userName}><AiOutlineUser />{element.userName}</p>
            <p className={rightsection.Email}><HiOutlineMail />{element.Email}</p>
            <p className={rightsection.phone}><BsTelephone />{element.phone}</p></div>
            <div className={rightsection.buttons}>
            <DeleteButton onClick={Deletion} /> 
            <EditButton /> 
            </div>
            </div>
            <div className={rightsection.Details}>
            <h1>Personel Details</h1>
            <p>First Name : {element.firstName}</p>
            <p>Last Name : {element.lastName}</p>
            <p>Gender :{element.gender}</p>
            <p>Date of Birth:{element.Dob}</p>
            <p>Country : {element.country}</p>
            <p>City :{element.city}</p>
            <p>street : {element.street}</p>
            <p>Zipcode : {element.zipcode}</p>
            <p>Adress : {element.Adress}</p>
            </div>
            
            </div>)}

        </div>
    )
}

export default RightSection