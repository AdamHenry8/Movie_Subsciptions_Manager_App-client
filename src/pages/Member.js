import {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import utils from '../utils/appUtils';

import '../Home.css';
import AddNewSubComp from "./AddNewSub";

function MemberComp(props) {
//state
  const [showAddNewSubs, setShowAddNewSubs] = useState(false);
  const [thisMemberSubs, setThisMemberSubs] = useState([]);
//general
  const history = useHistory();
//On Mounting
  useEffect( () => {
    async function fetchData ()
    {
      let resp = await utils.getSubs();
      let filteredSubs = resp.data.filter(x => x.member_id._id === props.memberData._id);
      setThisMemberSubs(...thisMemberSubs, filteredSubs); 
    }
    fetchData();

  },[]);

  const navToEditMember = () =>
  {
    let memberID = props.memberData._id;
    history.push("/home/subscriptions/editmember/" + memberID);
  }
  const deleteMember = async () =>
  {
    let resp = await utils.deleteMember(props.memberData._id);
    
    let resp2 = await utils.deleteSubsByMemberId(props.memberData._id);
    alert(resp.data + " " + resp2.data);
  }
  const showAddNewSub = () =>
  {
    setShowAddNewSubs(!showAddNewSubs);
  }


  return (
    <div style={{border: "5px solid black", width:"50%"}} >
      
      <h3>{props.memberData.full_name}</h3> <br/>
      Email: <span>{props.memberData.email}</span> <br/>
      City: <span>{props.memberData.city}</span> <br/>

      <button onClick={navToEditMember}>Edit</button>
      <button onClick={deleteMember}>Delete</button> <br/>

      <div id="member-subs-wrapper" style={{border: "5px solid black", margin: "5px", padding: "10px"}}>
          <h2>Movies Watched</h2>
          <button onClick={showAddNewSub}>subscribe to new movie</button> <br/>
         {showAddNewSubs?  <AddNewSubComp member_id={props.memberData._id} /> : null}
          <ul>
            {
              thisMemberSubs.map(item => {
                return <li key={item._id}><Link to={"/home/movies/allmovies"}>{item.movie_id.name}</Link>,  {item.date}</li> 
              })
            }
          </ul>
        </div> 
    
      
      
      
    </div>
  );
}

export default MemberComp;
