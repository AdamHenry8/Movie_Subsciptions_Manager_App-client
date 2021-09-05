import {useEffect, useState} from "react";

import utils from '../utils/appUtils';

import '../Home.css';
import MovieComp from "./Movie";

function AllMoviesComp(props) {

  const [movies, setMovies] = useState([]);

  useEffect( () => {
    if(props.filteredMovies.length > 0)
    {
      setMovies(props.filteredMovies)
    }
    else
    {
      async function fetchData ()
      {
        let resp = await utils.getMovies("http://localhost:8000/api/movies")
        setMovies(resp.data);
      }
       fetchData();
    }

  }, [movies, props.filteredMovies]);



  return (
    <div >
      
      <h3>hi from all movies</h3>
    
        <div id="sub-routing-outlet-wrapper">  
          {
            movies.map(item => {
              return <MovieComp key={item._id} movieData={item}></MovieComp>
            })
          }
        </div>

      
    </div>
  );
}

export default AllMoviesComp;
