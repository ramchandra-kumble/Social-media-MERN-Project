import React from "react";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router> 
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
          <Route path="/register" >
            <Register />
          </Route>
          <Route path="/profile/:useranme" >
            <Profile/>
          </Route>
        
        </Switch>

      </Router >
    
   </div>
  );
}

export default App;
