import React, { Component } from 'react';
const NavBar =({count})=>{
    return (<nav className="navbar navbar-light bg-light" >
    <a className="navbar-brand" href="#" > 
    Navbar 
    <span className="badge-pill badge-secondary">
        {count}</span></a>
</nav> );
}
export default NavBar;