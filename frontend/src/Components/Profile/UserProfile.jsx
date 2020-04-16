import React from 'react'
import { NavBar } from '../HomePage'
import { User } from '../../Models'
import {Dog} from '../../Models'
import '../../Components/Vet/profile.css'


export class UserProfile extends React.Component {
  you = new User(
    2,
    "Dylan",
    "Caro",
    "dcaro@smu.edu",
    [new Dog("Tom","Golden Retriever",3),
    new Dog("Jerry","German Shepard",6)
    ]
  )  



  state = {
    you: this.you, 
  };

  render() {
    return (
      <>
        <NavBar />

        <div className="content">
          <div className="title mb-3">
            <h3>
              Welcome Back! {this.state.you.firstName}
            </h3>
            <span className="spacer"></span>
          </div>
          <div className="info">
            <div className="sidebar mr-5 mb-3">
              <img src="https://via.placeholder.com/200" 
                   alt="Profile Pic"
                   width="200"
                   />

              <button type="button" className="btn btn-info btn-block mt-2">
                Change profile
              </button>
              <button type="button" className="btn btn-info btn-block mt-2">
                Add a Dog
              </button>
            </div>
            <div className="description">
              <table className="table table-collapse">
                <tr>
                  <th>Email Contact</th>
                  <td>{this.state.you.email}</td>
                </tr>
                </table>
                <h3>Your Pets</h3>
                <table className="table table-collapse">
                <tr>
                    <th>{this.state.you.Dogs[0].Name}</th>
                    <td>{this.state.you.Dogs[0].Age} year old {this.state.you.Dogs[0].Breed}</td>
                </tr>
                <tr>
                    <th>{this.state.you.Dogs[1].Name}</th>
                    <td>{this.state.you.Dogs[1].Age} year old {this.state.you.Dogs[1].Breed}</td>
                </tr>
              </table>
              
            </div>
          </div>
        </div>
      </>
    );
  }


}