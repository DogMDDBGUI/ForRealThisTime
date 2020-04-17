import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export class NavBar extends React.Component {
  menu = [
    'My Profile', 'Book Appointment', 'Logout'
  ];

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link to="/home" className="navbar-brand mr-0 mr-md-2">
          <img src={process.env.PUBLIC_URL + '/dog2.png'} width="30" height="30" class="d-inline-block align-top" alt=""/>
          Dog MD
        </Link>
        <div className="collapse navbar-collapse" id="navbar-items">
          <ul className="navbar-nav">
            
              
                <li className="nav-item">
                  <NavLink className="nav-link" to="/usr/profile/:id" activeClassName="active">
                    {this.menu[0]}
                  </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/vet/profile/:id" activeClassName="active">
                      {this.menu[1]}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" activeClassName="active">
                      {this.menu[2]}
                    </NavLink>
                </li>            
          </ul>          
        </div>
      </nav>
    );  
  }
}