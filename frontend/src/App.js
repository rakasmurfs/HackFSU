import React from 'react';
import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
          <Switch>
            <Route exact path='/' component={UserForm} />
            {/* both /roster and /roster/:number begin with /roster */}
            <Route path='/Carpools' component={DisplayAvailable} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;