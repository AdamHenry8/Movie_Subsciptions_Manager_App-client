import {useEffect, useState} from "react";
import utils from '../utils/appUtils';
import { useHistory } from 'react-router-dom';

import '../Home.css';

function EditMemberComp(props) {
//state
  const [ member,  setMember ] = useState({});

//general
  const history = useHistory();
//life cycle
useEffect (()=> {
  let id = props.match.params.id;
  async function fetchData()
  {
    let resp = await utils.getMember(id);
    setMember(resp.data);
  }
  fetchData()
  
}, [props.match.params.id])

//Function
 
  const update = async (e) =>
    {
      e.preventDefault();
      let resp = await utils.updateMember(member._id, member);
      alert(resp.data);
      history.push('/home/subscriptions/allmembers');
    }

  const navBack = () =>
    {
      history.push('/home/subscriptions/allmembers');  
    }

  return (
    <div >
      
      <h3>Edit Member: {member.full_name}</h3>
      <form onSubmit={e => update(e)}>
        Full Name: <input type="text" value={member.full_name} onChange={e => setMember({...member, full_name: e.target.value})} ></input> <br/>
        Email: <input type="text" value={member.email} onChange={e => setMember({...member, email: e.target.value})} ></input> <br/>
        City: <input type="text" value={member.city} onChange={e => setMember({...member, city: e.target.value})} ></input> <br/>
        <button type="submit" class="main-buttons">Update</button> 
        <button type="button" class="main-buttons" onClick={navBack}>Cancel</button>
      </form>


      
    </div>
  );
}

export default EditMemberComp;
