import React from "react";
import { Link, NavLink } from 'react-router-dom'

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        };
    }
    
    render(){
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className = "header">Login</div>
                <div className = "content">
                    <div className="form">
                        <div className = "form-group">

                            <label htmlFor="email">Email</label>
                            <input type = "text"
                             name = "email" 
                             placeholder = "email..."
                             />

                            <label htmlFor="password">Password</label>
                            <input type = "password" 
                            name = "password" 
                            placeholder = "Password..."
                            />

                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Link to="/home" className="btn-primary btn-lg" >
                        Login
                    </Link>
                </div>
            </div>
        )}
}