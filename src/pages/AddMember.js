import {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import utils from '../utils/appUtils';

import '../Home.css';

function AddMemberComp(props) {
//state
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [isLoggedIn, setIsLoggedIn ] = useState(false) 

//General
  const history = useHistory();
  const loggedInUser = useSelector(state => state.loggedInUser);
//on mounting
useEffect(() => {
  if(loggedInUser.full_name.length > 1)
  {
    setIsLoggedIn(true);
  }
},[])
//Functions
  const addMember = async (e) =>
  {
    e.preventDefault();

    let newMemberObj  = {full_name: full_name, email: email, city: city};

    let resp = await utils.addMember(newMemberObj);
    alert(resp.data);
    history.push('/home/subscriptions/allmembers');  
  }
  const navBack = () =>
  {
    history.push('/home/subscriptions/allmembers');  
  }



  return (
    <div style={{display: isLoggedIn? 'block' : 'none'}}>
      
      <h3>Add a new Member</h3>
      <form onSubmit={e => addMember(e)}>
        Full Name: <input type="text" onChange={e => setFullName(e.target.value)}></input> <br/>
        Email: <input type="text" onChange={e => setEmail(e.target.value)}></input> <br/>
        City: <input type="text" onChange={e => setCity(e.target.value)}></input> <br/>
        
        <button class="main-buttons" type="submit">Save</button>
        <button class="main-buttons" type="button" onClick={navBack}>Cancel</button>
      </form>

      
    </div>
  );
}

export default AddMemberComp;
