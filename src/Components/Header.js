import React from 'react';
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NEWS PORTAL</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             INDIA
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
             <li><Link to="/">INDIA</Link></li>
             <li><Link to="/aus">AUSTRALIA</Link></li>
             <li><Link to="/jp">JAPAN</Link></li>
             <li><Link to="/us">UNITED STATES</Link></li>
          </ul>
        </li>    
      </ul>
   
    </div>
  </div>
</nav>
        </div>
    );
}

export default Header;