import {useEffect, useState} from "react";
import utils from '../utils/appUtils';
import { useHistory } from 'react-router-dom';

import '../Home.css';

function EditMovieComp(props) {
//state
  const [ movie, setMovie ] = useState({});

//general
  const history = useHistory();
//life cycle
  useEffect(() => {
    async function fetchData ()
    {
      let movieId = props.match.params.id;
      let resp = await utils.getMovie(movieId);
      setMovie(resp.data);
    }
    fetchData();

  }, [props.match.params.id])

//Function
  const setGenres = (e) =>
    {
      let str = e.target.value;
      let arr = str.split(",");
      setMovie({...movie, generes: arr});
    }

  const update = async (e) =>
    {
      e.preventDefault();
      let resp = await utils.updateMovie(movie._id, movie);
      alert(resp.data);
      history.push('/home/movies/allmovies');
    }

  const navBack = () =>
    {
      history.push('/home/movies/allmovies');  
    }

  return (
    <div >
      
      <h3>Edit Movie: {movie.name}</h3>
      <form onSubmit={e => update(e)}>
        Name: <input type="text" value={movie.name} onChange={e => setMovie({...movie, name: e.target.value})} ></input> <br/>
        Genres: <input type="text" value={movie.generes} onChange={e => setGenres(e)}></input> <br/>
        Image URL: <input type="text" value={movie.image_url} onChange={e => setMovie({...movie, image_url: e.target.value})}></input> <br/>
        Year Premiered: <input type="text" value={movie.year_premiered} onChange={e => setMovie({...movie, year_premiered: e.target.value})}></input> <br/>
        <button type="submit" class="main-buttons">Update</button> 
        <button type="button" class="main-buttons" onClick={navBack}>Cancel</button>
      </form>


      
    </div>
  );
}

export default EditMovieComp;
