import React from 'react';
import { NavBar } from '../HomePage';
import { Vet } from '../../Models';
import './profile.css';


export class VetProfile extends React.Component {
  sampleVet = new Vet(
    1,
    'Phuoc Dinh',
    'Le',
    'lephuocdinh99@gmail.com',
    3,
    1,
    4.5,
    ['Patience', 'Helpful'],
  )  

  fullName() {
    return this.state.vet.first_name + " " + this.state.vet.last_name;
  }

  state = {
    vet: this.sampleVet, 
  };

  render() {
    return (
      <>
        <NavBar />

        <div className="content">
          <div className="title mb-3">
            <h3>
              Veterinarian - {this.fullName()}
            </h3>
            <span className="spacer"></span>
            <h3>
              Rating: {this.state.vet.ratings}
            </h3>
          </div>
          <div className="info">
            <div className="sidebar mr-5 mb-3">
              <img src="https://via.placeholder.com/200" 
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
                  <td>{this.state.vet.zipcode}</td>
                </tr>
                <tr>
                  <th>Years of Experience </th>
                  <td>{this.state.vet.year_exp} year(s)</td>
                </tr>
                <tr>
                  <th>Email Contact</th>
                  <td>{this.state.vet.email}</td>
                </tr>
                <tr>
                  <th>Skills</th>
                  <td>{this.state.vet.skills.join(', ')}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }


}