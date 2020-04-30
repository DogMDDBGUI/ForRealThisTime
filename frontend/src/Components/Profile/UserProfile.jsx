import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../HomePage'
import '../../Components/Vet/profile.css'


export class UserProfile extends React.Component {
  render() {
    return (
      <>
        <NavBar />

        <div className="content">
          <div className="title mb-3">
            <h3>
              User - {this.props.user.first_name} {this.props.user.last_name}
            </h3>
            <span className="spacer"></span>
          </div>
          <div className="info">
            <div className="sidebar mr-5 mb-3">
              <img src={this.props.user.imageURL} 
                   alt="Profile Pic"
                   width="200"
                   />

              {
              localStorage.getItem('id') == this.props.user.id &&
                <Link to="/edit" className="btn btn-info btn-block mt-2">
                  Edit profile
                </Link>
              }
              <Link className="btn btn-info btn-block mt-2" 
                    to={`/dogs/${this.props.user.id}`}>
                View my dogs
              </Link>
            </div>
            <div className="description">
              <table className="table table-collapse">
                <tr>
                  <th>Email Contact</th>
                  <td>{this.props.user.email}</td>
                </tr>
                <tr>
                  <th>Zipcode</th>
                  <td>{this.props.user.zipcode}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }


}