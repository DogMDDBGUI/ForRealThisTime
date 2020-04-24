import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../HomePage'
import { User } from '../../Models'
import {Dog} from '../../Models'
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
              <button type="button" className="btn btn-info btn-block mt-2">
                Add a Dog
              </button>
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
                <h3>Your Pets</h3>
              <table className="table table-collapse">
                <tr>
                    {/* <th>{this.props.user.Dogs[0].Name}</th> */}
                    {/* <td>{this.props.user.Dogs[0].Age} year old {this.props.user.Dogs[0].Breed}</td> */}
                </tr>
                <tr>
                    {/* <th>{this.props.user.Dogs[1].Name}</th> */}
                    {/* <td>{this.props.user.Dogs[1].Age} year old {this.props.user.Dogs[1].Breed}</td> */}
                </tr>
              </table>
              
            </div>
          </div>
        </div>
      </>
    );
  }


}