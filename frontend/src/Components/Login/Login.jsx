import React from "react";
import { Link, NavLink, Redirect } from 'react-router-dom'
import { ProductRepository } from '../../Api/productRepository'

export class Login extends React.Component {
    api = new ProductRepository();

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
        };
    }

    loginSubmit() {
        if (this.state.email === "" || this.state.password === "") {
            alert("Please enter all fields");
            return;
        }
        this.api.login(this.state).then(
            data => {
                if (data.code === 204) {
                    alert(data.msg);
                }
                else {
                    localStorage.setItem('id', data.id);
                    localStorage.setItem('role_id', data.role_id);
                    this.setState({redirect: true});
                }
            }
        )
    }

    
    render(){
        if (localStorage.getItem('id')) {
            return <Redirect to='/home' />
        }
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className = "header">Login</div>
                <div className = "content">
                    <div className="form">
                        <div className = "form-group">

                            <label htmlFor="email">Email</label>
                            <input  type = "text"
                                    id = "email" 
                                    placeholder = "email..."
                                    onChange={e => this.setState({email: e.target.value})}
                             />

                            <label htmlFor="password">Password</label>
                            <input type = "password" 
                                   id = "password" 
                                   placeholder = "Password..."
                                   onChange={e => this.setState({password: e.target.value})}
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