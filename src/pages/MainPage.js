import {useEffect} from "react";
import { useHistory } from "react-router-dom";

import LoginComp from "./Login";
import HomePageComp from "./HomePage";

import {Switch, Route} from 'react-router-dom';
import MoviesComp from "./Movies";

function MainPageComp() {

  const history = useHistory();

  useEffect(() => {
    history.push("/login")
  }, [history]);



  return (
    <div className="App" style={{width: '800px', margin: '0 auto'}}>
      <h1>Welcome To Adam's Movies-Subscriptions Website</h1>

      <Switch>
        
        <Route path="/login" component={LoginComp}></Route>
        <Route path="/home" component={HomePageComp}></Route>
        
      </Switch>

      
    </div>
  );
}

export default MainPageComp;
