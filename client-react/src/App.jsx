import React from "react";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Router> 
        <Switch>
          <Route exact path="/" >
            {user ? < Home /> : <Register/>}
          </Route>
          <Route path="/login" >
            {user ? <Redirect to="/" /> : <Login/>}
          </Route>
          <Route path="/register" >
            {user ? <Redirect to="/" /> : <Register/>} 
          </Route>
          <Route path="/profile/:username" >
            <Profile/>
          </Route>
        
        </Switch>

      </Router >
    
   </div>
  );
}

export default App;
