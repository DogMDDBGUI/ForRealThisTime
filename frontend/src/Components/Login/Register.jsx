import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { User } from '../../Models'

export class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newProfile : User,
            checked: false
        };

    }
    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

    render(){
        return(
            <div className="base-container">
                <div className = "header">Register</div>
                <div className = "content">
                    <div className="form">
                        <div className = "form-group">
                            <label htmlFor="Firstname">First Name</label>
                            <input type = "text" name = "Firstname" placeholder = "Firstname..."/>

                            <label htmlFor="Lastname">Last Name</label>
                            <input type = "text" name = "Lastname" placeholder = "Lastname..."/>

                            <label htmlFor ="Vet">Are you a veteranarian?</label>
                            <input type="checkbox"/>

                            <label htmlFor="Area Code">Area Code</label>
                            <input type = "Area Code" name = "Area Code" placeholder = "Area Code..."/>

                            <label htmlFor="email">E-Mail</label>
                            <input type = "text" name = "useremailname" placeholder = "email..."/>
                            
                            <label htmlFor="password">Password</label>
                            <input type = "password" name = "password" placeholder = "Password..."/>
                            <label htmlFor="ConfPassword">Confirm Password</label>
                            <input type = "password" name = "ConfPassword" placeholder = "Password..."/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                <Link to="/home" className="btn-primary btn-lg" >
                        Register  
                </Link>
                </div>
            </div>
        )}
}