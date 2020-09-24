
import React,{useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
const AddCustomer =()=>{

const history =useHistory();

const [customer,setCustomer] = useState({
     name:"",
     email:"",
     phone:"",
     dish:"",
     amount:""
});

const {name,email,phone,dish,amount} = customer;


const handleChange=(event)=>{
    setCustomer({...customer,[event.target.name]:event.target.value});
 }
// -------------------------------------------------------
 const handleSubmit =(event)=>{
    event.preventDefault();
    const custData = axios.post("http://localhost:3003/customer",customer);
    setCustomer(custData.data);

    // console.log(customer);
    setCustomer({name:"",email:"",phone:"",dish:"",amount:""});
    history.push("/");
}
// -------------------------------------------------------


return(<>
<div className="col-6  m-auto">
   <div className="center rounded-5">
       
    <form className="form-group  p-5 my-5" onSubmit={handleSubmit}>
    <h1 className="text-white text-center ">Add Customer</h1>
        <input type="text" value={name} placeholder="Enter Name" name="name" onChange={handleChange} className="form-control my-3"  />
        <input type="text" value={email} placeholder="Enter Email" name="email" onChange={handleChange} className="form-control my-3"/>
        <input type="text" value={phone} placeholder="Enter Phone Number" name="phone" onChange={handleChange} className="form-control my-3"/>
        <input type="text" value={dish} placeholder="Enter Dish Name" name="dish" onChange={handleChange} className="form-control my-3"/>
        <input type="text" value={amount} placeholder="Enter Amount" name="amount" onChange={handleChange} className="form-control my-3"/>  
        <button className="btn btn-primary px-5"> Submit </button>
    </form>

   </div>
</div>
</>)
}
export default AddCustomer;