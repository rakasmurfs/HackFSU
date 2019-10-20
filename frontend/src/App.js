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
import EventsList from './components/EventsList';
import Login from './components/Login';
import OrgDashboard from './components/OrgDashboard';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Landing' component={EventsList} />
            <Route exact path='/Carpools' component={DisplayAvailable} /*render={(props) => <DisplayAvailable count={props.match.params.count}></DisplayAvailable>} *//>
            <Route exact path='/Carpools/car/:count' component={props => <DisplayAvailable id={props.match.params.count}/>} />
            <Route exact path='/Apply' component={UserForm} />
            <Route exact path='/OrgDashboard' component={OrgDashboard} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;