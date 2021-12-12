import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../img/logo/logo.png';

export default class Navbar extends Component {
render() {
return (
<>
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <NavLink className="navbar-brand" to="#"><img className="mr-5" src={logo} alt=""/></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="hamburgerIcon"><i class="fas fa-bars"></i></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Case Study</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Contact</NavLink>
          </li>
        </ul>
        <NavLink to="" className="get-btn">Get Free Quote</NavLink>
      </div>
    </div>
  </nav>
</>
)
}
}