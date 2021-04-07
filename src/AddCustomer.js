import { useState, useEffect } from "react";

const AddCustomer = (props)=>{

    const [name,setName] = useState('')
    const [loc,setLoc] = useState('')

    useEffect(()=>{
        if(props.inEditState){            
            setName(props.cusById.name)
            setLoc(props.cusById.location)
        }
    },[props.inEditState])

    const onFormSubmitted = (e)=>{
        e.preventDefault()
        if(!name || !loc){
            alert("Enter the Details in the form!")
            return
        }
        const isEdit = (props.inEditState) ? true : false; 
        const customer = (props.inEditState) ? {id : props.cusById.id,name:name,location :loc} : {name:name,location :loc};
        props.addCustomer(customer,isEdit)
        setName('')
        setLoc('')
    }

    return(
        <div>
            <form className="form-box" onSubmit={onFormSubmitted}>
                <div className="form-group">
                    <label>Customer Name : </label>
                    <input type="text" className="form-control" placeholder="Enter Name" required
                        value={name} onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Customer Location : </label>
                    <input type="text" className="form-control" placeholder="Enter Location" required
                        value={loc} onChange={(e)=> setLoc(e.target.value)}
                    />
                </div>
                <button type="submit" className={(props.inEditState) ? "btn btn-warning" :"btn btn-primary"}>
                    {(props.inEditState) ? "Edit Customer" : "Add Customer"}
                </button>
            </form>
        </div>
    )
}

export default AddCustomer;