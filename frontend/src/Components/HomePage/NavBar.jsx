import React from 'react'

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
        <a href="/" className="navbar-brand mr-0 mr-md-2">
          <img src={process.env.PUBLIC_URL + '/dog2.png'} width="30" height="30" class="d-inline-block align-top" alt=""/>
          Dog MD
        </a>
        <div className="collapse navbar-collapse" id="navbar-items">
          <ul className="navbar-nav">
            {
              this.menu.map(item => (
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    {item}
                  </a>
                </li>
              ))
            }
          </ul>          
        </div>
      </nav>
    );  
  }
}