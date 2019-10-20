import React from 'react';
import './cssSheets/navstyles.css';

function NavBar() {
    return <div className="topnav">
    <a className="active" href="/Landing">Home</a>
    <a href="/Apply">Apply</a>
    <a href="/OrgDashboard">Dashboard</a>
    <a href="/">Sign Out</a>
  </div>
}

export default NavBar;