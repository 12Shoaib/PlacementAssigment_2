import deletebutton from '../DeleteButton/deletebutton.module.css'

const DeleteButton = () => {

    return (
       <div className={deletebutton.mainComponent}>

        <button className={deletebutton.DelButton}>Delete</button>

       </div>
    )
}
export default DeleteButton