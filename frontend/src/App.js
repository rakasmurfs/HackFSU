import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from "./components/Form";
import NavBar from "./components/NavBar";
import DisplayAvailable from "./components/displayAvailable";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <DisplayAvailable></DisplayAvailable> */}
      <UserForm></UserForm>
    </div>
  );
}

export default App;
