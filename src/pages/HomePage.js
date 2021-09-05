import {Switch, Route, Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import MoviesComp from './Movies';
import MemberComp from './Member';
import SubscriptionsComp from './Subscriptions';

import '../Home.css';

function HomePageComp(props) {

  const loggedInUser = useSelector(state => state.loggedInUser);
  const history = useHistory();
  
  const navToMovies = () =>
  {
    history.push('/home/movies');
  }
  const navToSubscriptions = () => 
  {
    history.push('/home/subscriptions');
  }

  return (
    <div >
        <p>Hi {loggedInUser.full_name} !</p>  <br/>
      <div id="main-menu-wrapper">
        <button class="main-buttons" onClick={navToMovies}>Movies</button>
        <button class="main-buttons" onClick={navToSubscriptions}>Subscriptions</button>
        <button class="main-buttons">Users Management</button>
        <button class="main-buttons">Log Out</button>
      </div>

      <div id="router-outlet-wrapper" >
        <Route path="/home/movies" component={MoviesComp}></Route>
        <Route path="/home/subscriptions" component={SubscriptionsComp}></Route>

        <Route path="/home/members/:id" component={MemberComp}></Route>
      </div>
     
    </div>
  );
}


export default HomePageComp;
