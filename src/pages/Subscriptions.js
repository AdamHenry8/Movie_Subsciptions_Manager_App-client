import {useEffect, useState} from "react";
import { useSelector } from 'react-redux'; 
import utils from '../utils/appUtils';

import { Switch, Route, useHistory } from 'react-router-dom';

import '../Home.css';
import AllMembersComp from './AllMembers';
import AddMemberComp from './AddMember';
import EditMemberComp from "./EditMember";

function SubscriptionsComp() {


//General
  const history = useHistory();
  const loggedInUser = useSelector(state => state.loggedInUser);
//On Mounting
useEffect(() =>{
    
  document.getElementById("btn").click();
  
}, [])

  const navToAllMembers = () =>
    {
      if(!history.location.pathname.includes("/home/subscriptions/editmember"))
      {
        history.push('/home/subscriptions/allmembers');
      }
      
    }
  const navToAddMember = () =>
    {
      history.push('/home/subscriptions/addmember');
    }


  return (
    <div style={{border: "5px solid black"}}>
      
      <h1>Subscriptions</h1> <br/>
      {loggedInUser.full_name} <br/>
      <button type="button" id="btn" class="main-buttons" autoFocus onClick={navToAllMembers}>All Members</button>
      <button type="button" class="main-buttons" onClick={navToAddMember}>Add Member</button> 

      <Switch>
        <Route path="/home/subscriptions/allmembers" component={AllMembersComp}></Route>
        <Route path="/home/subscriptions/addmember" component={AddMemberComp}></Route>
        <Route path="/home/subscriptions/editmember/:id" component={EditMemberComp}></Route>
       
        
      </Switch>
      
    </div>
  );
}

export default SubscriptionsComp;
