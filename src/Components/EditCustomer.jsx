
import React,{useEffect, useState} from "react";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";


const AddCustomer =()=>{

const history =useHistory();
const {id}= useParams();

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

 const loadCust = async()=>{
    const result = await axios.get(`http://localhost:3003/customer/${id}`);
    setCustomer(result.data);
 }

useEffect(()=>{
    loadCust();
},[])
// -------------------------------------------------------
 const handleSubmit =(event)=>{
    event.preventDefault();
    axios.put(`http://localhost:3003/customer/${id}`,customer);
        history.push("/");
}
// -------------------------------------------------------


return(<>
<div className="col-6  m-auto">
   <div className="center rounded-5">
       
    <form className="form-group bg-secondary p-5 my-5" onSubmit={(event)=>{handleSubmit(event)}}>
    <h1 className="text-white text-center ">Add Customer</h1>
        <input type="text" value={name} placeholder="Enter Name" name="name" onChange={(event)=>{handleChange(event)}} className="form-control my-3"  />
        <input type="text" value={email} placeholder="Enter Email" name="email" onChange={(event)=>{handleChange(event)}} className="form-control my-3"/>
        <input type="text" value={phone} placeholder="Enter Phone Number" name="phone" onChange={(event)=>{handleChange(event)}} className="form-control my-3"/>
        <input type="text" value={dish} placeholder="Enter Dish Name" name="dish" onChange={(event)=>{handleChange(event)}} className="form-control my-3"/>
        <input type="text" value={amount} placeholder="Enter Amount" name="amount" onChange={(event)=>{handleChange(event)}} className="form-control my-3"/>  
        <button className="btn btn-primary px-5"> Submit </button>
    </form>

   </div>
</div>
</>)
}
export default AddCustomer;