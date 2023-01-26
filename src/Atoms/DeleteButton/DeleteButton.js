import deletebutton from '../DeleteButton/deletebutton.module.css'

const DeleteButton = (props) => {

    return (
       <div className={deletebutton.mainComponent}>

        <button onClick={props.onClick} className={deletebutton.DelButton}>Delete</button>

       </div>
    )
}
export default DeleteButton