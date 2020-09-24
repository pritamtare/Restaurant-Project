import React from 'react'
import AddCustomer from "../src/Components/AddUser"
import HOME from "../src/Components/Home"
import EditCustomer from "../src/Components/EditCustomer"
import ViewHistory from "../src/Components/ViewHistory"
import {Route,Redirect,Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      
      <Switch>
        <Route exact path="/" component={HOME}/>
        <Route exact path="/user/add" component={AddCustomer}/>
        <Route exact path="/history" component={ViewHistory}/>
        <Route exact path="/editCustomer/:id" component={EditCustomer}/>
        
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
