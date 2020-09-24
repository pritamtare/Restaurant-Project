import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ViewHistory() {
    const [view,setView]=useState([]);

    const loadCustomer=async ()=>{
        const result =await axios.get("http://localhost:3003/customer");
        setView(result.data);
    }
    useEffect(() => {
       loadCustomer();
    }, []);
    const deleteCustomer=(id)=>{
        axios.delete(`http://localhost:3003/customer/${id}`);
        loadCustomer();
    }
    return (
        <>
            <div className="container">
                {
                    view.map((value,index)=>{
                        return (
                            <div className="card">
                    <ul>
                        <li>Id : {index+1}</li>
                        <li>Name : {value.name}</li>
                        <li>Email : {value.email}</li>
                        <li>Mobile : {value.mobile}</li>
                        <li>Dish : {value.dish}</li>
                        <li>Amount : {value.amount}</li>
                        <li className="d-flex justify-content-around ">
                              <Link className="btn btn-primary  px-5" to={`/editCustomer/${value.id}`}>Edit</Link>
                              <Link className="btn btn-danger px-5" onClick={()=>{deleteCustomer(value.id)}}>Delete</Link>
                        </li>
                    </ul>
                    </div>
                        )
                    })
                }
               
            </div>
        </>
    )
}
