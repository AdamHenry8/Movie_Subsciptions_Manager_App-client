import {useEffect, useState} from "react";
// import axios from "axios";
import '../Home.css';
import utils from "../utils/appUtils";
import MemberComp from "./Member";

function AllMembersComp(props) {

//state
  const [members, setMembers] = useState([]); 

//OnMounting

  useEffect(() => {
    async function fetchData()
    {
      let resp = await utils.getMembers();
      setMembers(resp.data);
    }
    fetchData();
    
  }, [members])

  return (
    <div >
      
      <h3>hi from AllMembers</h3> <br/>
      {
        members.map(item => {
          return <MemberComp key={item._id} memberData={item}></MemberComp>
        })
      }


      
    </div>
  );
}

export default AllMembersComp;
