import {useState, useEffect} from "react";
import utils from '../utils/appUtils';
import { useHistory } from "react-router-dom";

import '../Home.css';

function AddNewSubComp(props) {

  //state 
  
  const [allMovies, setAllMovies] = useState([]);
  

  const [newSubMovieID, setNewSubMovieID] = useState(0);
  const [newSubDate, setNewSubDate] = useState('');
  
  //General
  const history = useHistory();
  //on mounting 
  useEffect(() => {
    async function getAllMovies()
    {
      let resp2 = await utils.getMovies();
      setAllMovies(resp2.data);
       
    }
    getAllMovies();
   
  }, []);
  //Functions
  const addSub = async (e) =>
  {
    e.preventDefault();

    console.log(newSubMovieID, newSubDate);
    
    let newSubObj = {movie_id: newSubMovieID, member_id: props.member_id , date: newSubDate }

    let resp = await utils.postNewSub(newSubObj);
    alert(resp.data);
      
  }


  return (
    <div >
      
      <form onSubmit={e => addSub(e)}>
        Add a new movie subscription :  <br/>
        movie :
        <select name="movie_name" onChange={e => setNewSubMovieID(e.target.value)}>
          <option value=''/>
          {allMovies.map(item => {
            return <option key={item._id} value={item._id}>{item.name}</option>
          })}
        </select>  <br/>
        date (dd/mm/yyyy): <input type="text" onChange={e => setNewSubDate(e.target.value)}/> <br/>
          
        <button class="main-buttons" type="submit">subscribe</button>
        
      </form>


      
    </div>
  );
}

export default AddNewSubComp;
