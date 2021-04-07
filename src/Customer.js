import {FaTimes} from 'react-icons/fa'
import { FaPencilAlt } from "react-icons/fa";

const Customer = (props)=>{
    return(
        <div className="card-box" style={ {border: '1px solid rgba(0, 0, 0, 0.05)'} } >
            <p className = "id"><b>ID : </b>  { props.customer.id }</p>
            <p className = "name"><b>Customer Name :</b> { props.customer.name }</p>
            <p className = "loc"><b>Customer Location :</b> { props.customer.location }</p>            
                <FaTimes style = {{ color:'#007bff', cursor:'pointer'}} 
                    onClick={()=> props.deleteCus(props.customer.id)}
                />
                <FaPencilAlt style = {{ color:'#007bff', cursor:'pointer'}} 
                    onClick={()=> props.editButtonClicked(props.customer.id)}
                />
            
        </div>
    )
}

export default Customer;