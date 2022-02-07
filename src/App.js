import './App.css';
import Login from './Components/Login'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeUser from './Components/Home/User';
import HomeAdmin from './Components/Home/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Home">
            <HomeUser />
          </Route>
          <Route exact path="/Admin">
            <HomeAdmin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
