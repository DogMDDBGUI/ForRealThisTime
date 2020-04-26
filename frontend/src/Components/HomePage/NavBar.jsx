import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavBar extends React.Component {
  logOut() {
    localStorage.removeItem('id');
    localStorage.removeItem('role_id');
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items" aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link to="/home" className="navbar-brand mr-0 mr-md-2">
          <img src={process.env.PUBLIC_URL + '/dog2.png'} width="30" height="30" className="d-inline-block align-top" alt=""/>
          Dog MD
        </Link>
        <div className="collapse navbar-collapse" id="navbar-items">
          <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user" activeClassName="active">
                    My Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/vets" activeClassName="active">
                      Vet Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/appointments" activeClassName="active">
                      View Appointments
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/" activeClassName="active" onClick={this.logOut}>
                      Logout
                    </NavLink>
                </li>   
                            
          </ul>          
        </div>
      </nav>
    );  
  }
}