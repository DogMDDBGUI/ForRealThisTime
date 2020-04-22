import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { ProductRepository } from '../../Api/productRepository'

export class Login extends React.Component {
    api = new ProductRepository();

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        };
    }

    loginSubmit() {
        this.api.login().then(
            data => console.log(data)
        )
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
                    <button type="button" 
                            className="btn btn-primary btn-lg"
                            onClick={() => this.loginSubmit()}
                            >
                        Login
                    </button>
                </div>
            </div>
        )}
}