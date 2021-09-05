//Hooks + General
import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux'; 
import utils from '../utils/appUtils';
//Components
import AllMoviesComp from "./AllMovies";
import AddMovieComp from "./AddMovie";
import EditMovieComp from './EditMovie';
//CSS
import '../Home.css';

function MoviesComp() {

  //state
  const [searchPhrase, setSearchPhrase] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  //set ups
  const history = useHistory();
  const loggedInUser = useSelector(state => state.loggedInUser);
  //functions, actions on clicks
  const navToAllMovies = () =>
  {
    history.push('/home/movies/allmovies');
  }

  const navToAddMovie = () =>
  {
    history.push('/home/movies/addmovie');
  }
  //On-Mounting
  useEffect(() =>{
    
    document.getElementById("btn").click();
    
  }, [])
  //find movies func
  const findMovies = async () =>
  {
    let result =  await utils.getMovies();
    let filtered = result.data.filter(x => x.name.includes(searchPhrase));
    setFilteredMovies(filtered);

  }


  return (
    <div style={{border: "5px solid black"}}>
      <h1>Movies</h1> <br/>
      {loggedInUser.full_name}
      <div id="sub-menu-wrapper">
        <button type="button" id="btn" class="main-buttons" autoFocus onClick={navToAllMovies}>All Movies</button>
        <button type="button" class="main-buttons" onClick={navToAddMovie}>Add Movie</button> 
        Find Movies: <input type="text" name="search-movies" onChange={e => setSearchPhrase(e.target.value)}></input> 
        <button class="main-buttons" onClick={findMovies}>Find</button> <br/>
      </div>
  
      <Switch>
        <Route path="/home/movies/allmovies"><AllMoviesComp filteredMovies={filteredMovies}/></Route>
        
        <Route path="/home/movies/addmovie" component={AddMovieComp}></Route>
        <Route path="/home/movies/editmovie/:id" component={EditMovieComp}></Route>
        
      </Switch>
        

 


      
    </div>
  );
}

export default MoviesComp;
