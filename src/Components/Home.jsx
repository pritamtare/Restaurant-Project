
import React from 'react'
import {NavLink} from "react-router-dom"
const HOME =()=>{


return(<>
<h1 className="text-center text-white mt-5"> Customer Details </h1>
<div className="centerDiv">

<NavLink className="btn btn-primary AddCust" to="/user/add" >Add Customer</NavLink>
<NavLink className="btn btn-success ViewCust" to="/history" >view history</NavLink>

</div>

</>)
};

export default HOME;