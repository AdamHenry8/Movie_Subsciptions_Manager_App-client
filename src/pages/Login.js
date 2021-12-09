import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux'; 



function LoginComp() {
  //Input Data from user login 
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(0);

  //Data From Server 
  const [usersDB, setUsersDB] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  const [isAutenticated, setIsAuthenticated] = useState(false); 
  const [warningNotice, setWarningNotice] = useState('');

  //History For Navigation
  const history = useHistory();

  // redux hooks connection
  const dispatch = useDispatch();

  useEffect( () => {
    async function fetchData ()
    {
      let users = await axios.get("https://mern-final-movie-sub-app.herokuapp.com/api/users");
      setUsersDB(users.data);
    }
     fetchData();
  }, []);

  const Login = () =>
  {
    let loggedInUser = usersDB.filter(x => x.user_name === userName && x.password == password);
    if(loggedInUser[0])
    {
      setIsAuthenticated(true);
      history.push('/home');
      dispatch({type: 'setLoggedInUser', payload: loggedInUser[0] })
    }
    else
    {
      setWarningNotice('*user details incorrect, please try again');
    }
  }

  return (
    <div>
      
      <h3>Log in Page</h3>
      User Name: <input type="text" onChange={e => setUserName(e.target.value)}/> <br/>
      Password: <input type="text" onChange={e => setPassword(e.target.value)}/> <br/>
      <input type="button" value="Login" onClick={Login} /> <br/>
      <p style={{color: "red", fontSize: "12px"}}> {warningNotice}</p>
      
    </div>
  );
}

export default LoginComp;
