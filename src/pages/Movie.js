import {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'
import utils from '../utils/appUtils';

import '../Home.css';



function MovieComp(props) {

  
  const [thisMovieSubs, setThisMovieSubs] = useState([]);
  
  const history = useHistory();

  useEffect( () => {
    async function fetchData ()
    {
      let resp = await utils.getSubs();
      let filteredSubs = resp.data.filter(x => x.movie_id._id === props.movieData._id);
      setThisMovieSubs(...thisMovieSubs, filteredSubs); 
    }
    fetchData();

  },[]);


  const navToEditMovie = () => {
    let movieID = props.movieData._id;
    history.push("/home/movies/editmovie/"+ movieID);
  }


  const deleteMovie = async () =>
  {
    
    let resp = await utils.deleteMovie(props.movieData._id);
    
    let resp2 = await utils.deleteSubsByMovieId(props.movieData._id);
    alert(resp.data + " " + resp2.data);
    
  }





  return (
    <div style={{border: "5px solid black", width:"50%"}}>
      
      <h3>{props.movieData.name}, {props.movieData.year_premiered}</h3> 
      <p>Genres: {props.movieData.generes.map((item,index)=> 
                   {return <span key={index}>{item} </span>})} 
      </p>
      <div id="img+subs wrapper" style={{overflow: "hidden"}}>
        <div id="img-wrapper" style={{float: "left"}}>
          <img style={{}} src={props.movieData.image_url} alt="moviePoster"></img>
        </div>
        <div id="sub-wrapper" style={{border: "5px solid black", float: "left", margin: "5px", padding: "10px"}}>
          <h2>Subscriptions Watched</h2>
          <ul>
            {
              thisMovieSubs.map(item => {
                return <li key={item._id}><Link to={"/home/subscriptions/editmember/" + item.member_id._id}>{item.member_id.full_name}</Link>,  {item.date}</li> 
              })
            }
          </ul>
        </div> 
      </div>
      <button type="button" class="main-buttons" onClick={navToEditMovie}>Edit</button>
      <button type="button" class="main-buttons" onClick={deleteMovie} >Delete</button>
      
      

      
    </div>
  );
}

export default MovieComp;
