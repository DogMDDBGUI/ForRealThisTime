import React from 'react'
import { NavBar } from '../HomePage'
import { User } from '../../Models'
import {Dog} from '../../Models'
import '../../Components/Vet/profile.css'


export class UserProfile extends React.Component {
 


  state = {};

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
              <Link to='/vet/appointments/${this.state.id}/Dogs' type="button" className="btn btn-info btn-block mt-2"/> 
            </div>
          </div>
        </div>
      </>
    );
  }


}