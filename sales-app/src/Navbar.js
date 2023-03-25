import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">SALES APP</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link className="nav-link" to="/add-sale">ADD SALE</Link>          
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/top-sales">TOP 5 SALES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/today-revenue">TODAY REVENUE</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">REGISTER</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">LOGOUT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;