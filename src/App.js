import './App.css';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
import { useEffect, useState } from 'react';
import Customers from './components/Customers';
import Footer from './components/Footer';

function App() {

  const JSON_SERVER_URL = "http://localhost:3005/customers/";
  const [customers, setCustomers] = useState([]);

  const [inEdit,setEdit] = useState(false)
  const [cusById,setCusById] = useState(null);

  const fetchCustomers = async()=>{
    const res = await fetch(JSON_SERVER_URL)
    const data = await res.json()
    return data
  }

  const fetchCustomerById = async(id)=>{
    const res = await fetch(JSON_SERVER_URL+id)
    const data = res.json()
    return data;
  }

  useEffect(()=>{
    const getCustomers = async()=>{
      const data = await fetchCustomers()
      setCustomers(data)
    }
    getCustomers()
  })

  const addCustomerOnClick = async(customer,isEdit)=>{
    if(!isEdit){
      const res = await fetch(JSON_SERVER_URL,{
        method:'POST',
        headers:{
          "Content-type":'application/json'
        },
        body:JSON.stringify(customer)
      })
      const data = await res.json()
      setCustomers([...customers,data])
    }else{
      
      const editedCusObj = {
        id:customer.id,
        name:customer.name,
        location:customer.location
      }
      const res = await fetch(JSON_SERVER_URL+customer.id,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(editedCusObj)
      })

      const data = await res.json()
      setCustomers([...customers,data])
      setEdit(false)
    }
  }

  const deleteCustomerOnClick = async(id)=>{
    const res = await fetch(JSON_SERVER_URL+id,{
      method:'DELETE'
    })
    const data = await res.json()
    setCustomers([...customers,data])
    
  }

  const getCustomerById = (id)=>{
    let returnCusObj;
    customers.forEach((item)=>{
      if(item.id === id){
        returnCusObj = item;
      }
    })
    return returnCusObj;
  }

  const editButtonClicked = (id)=>{
    setEdit(true)
    
    console.log(inEdit)
    setCusById(getCustomerById(id));
    console.log(cusById)
  }

  return (
    <div>
      <div className='container'>
        <div className='outer-box'>
          <Header title = "Customer Info Demo"></Header>
          <AddCustomer 
            addCustomer = {addCustomerOnClick} 
            inEditState = {inEdit}
            cusById = {cusById}
          />
        </div>
        { customers.length > 0 
          ? <Customers 
            customers={customers} 
            deleteCus = {deleteCustomerOnClick} 
            editButtonClicked = {editButtonClicked} 
          /> 
          : 'No Customers to display!!'
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;