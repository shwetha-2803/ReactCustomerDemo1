import Customer from "./Customer";

const Customers = (props)=>{
    return(
        <div>
            <h5 className="sec">Customer Details</h5>
            <hr className="hr-text"/>
            <div class="flex-container">
                {props.customers.map((customer,index) => (
                    <Customer 
                        customer = {customer} 
                        index={index} 
                        deleteCus = {props.deleteCus}
                        editButtonClicked = {props.editButtonClicked}
                    />
                ))}
            </div>
        </div>
    )
}

export default Customers;