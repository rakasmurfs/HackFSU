import React from 'react';
import './cssSheets/navstyles.css';

function NavBar() {
    return <div className="topnav">
    <a className="active" href="/">Home</a>
    <a href="/Carpools">Carpools</a>
    <a href="/Apply">Apply</a>
  </div>
}

export default NavBar;