import {useState} from "react";
import utils from '../utils/appUtils';
import { useHistory } from "react-router-dom";

import '../Home.css';

function AddMovieComp(props) {

  //state 
  const [name, setName] = useState('');
  const [year_premiered, setYearPremiered] = useState('');
  const [genres, setGenres] = useState('');
  const [image_url, setImageUrl] = useState('');
  
  //General
  const history = useHistory();
  //Functions
  const addMovie = async (e) =>
  {
    e.preventDefault();

    let newMovieObj  = {name: name, year_premiered: year_premiered, 
                        generes: genres.split(","), image_url: image_url};
    let resp = await utils.addMovie(newMovieObj);
    alert(resp.data);
    history.push('/home/movies/allmovies');  
  }
  const navBack = () =>
  {
    history.push('/home/movies/allmovies');  
  }

  return (
    <div >
      
      <form onSubmit={e => addMovie(e)}>
        Name: <input type="text" onChange={e => setName(e.target.value)}></input> <br/>
        Year Premiered: <input type="text" onChange={e => setYearPremiered(e.target.value)}></input> <br/>
        Genres: <input type="text" onChange={e => setGenres(e.target.value)}></input> <br/>
        Image URL: <input type="text" onChange={e => setImageUrl(e.target.value)}></input> <br/>
        <button class="main-buttons" type="submit">Add Movie</button>
        <button class="main-buttons" type="button" onClick={navBack}>Cancel</button>
      </form>


      
    </div>
  );
}

export default AddMovieComp;
