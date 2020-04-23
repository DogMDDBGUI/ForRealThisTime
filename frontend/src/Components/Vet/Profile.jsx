import React from 'react';
import { NavBar } from '../HomePage';
import { Vet } from '../../Models';
import './profile.css';


export class VetProfile extends React.Component {

  fullName() {
    return this.props.user.first_name + " " + this.props.user.last_name;
  }

  state = {};

  render() {
    return (
      <>
        <NavBar/>
        <div className="content">
          <div className="title mb-3">
            <h3>
              Veterinarian - {this.fullName()}
            </h3>
            <span className="spacer"></span>
            <h3>
              Rating: {this.props.user.ratings}
            </h3>
          </div>
          <div className="info">
            <div className="sidebar mr-5 mb-3">
              <img src={this.props.user.imageURL}
                   alt="Profile Pic"
                   width="200"
                   />

              <button type="button" className="btn btn-info btn-block mt-2">
                Edit profile
              </button>
              <button type="button" className="btn btn-success btn-block mt-2">
                Book Appointments
              </button>
            </div>
            <div className="description">
              <table className="table table-collapse">
                <tr>
                  <th>From </th>
                  <td>{this.props.user.zipcode}</td>
                </tr>
                <tr>
                  <th>Years of Experience </th>
                  <td>{this.props.user.year_experience} year(s)</td>
                </tr>
                <tr>
                  <th>Email Contact</th>
                  <td>{this.props.user.email}</td>
                </tr>
                <tr>
                  <th>Skills</th>
                  <td>{this.props.user.skills}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}