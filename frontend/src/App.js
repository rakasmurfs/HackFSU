import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserForm from "./components/Form";
import NavBar from "./components/NavBar";
import DisplayAvailable from "./components/displayAvailable";
import EventsComponent from './components/EventsComponent';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Landing' component={EventsComponent} />
            <Route exact path='/Carpools' component={DisplayAvailable} />
            <Route exact path='/Apply' component={UserForm} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;