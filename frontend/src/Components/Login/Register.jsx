import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { User } from '../../Models'
import { ProductRepository } from '../../Api/productRepository'

export class Register extends React.Component{
    api = new ProductRepository();
    dogOwnerImg = "https://image.shutterstock.com/image-photo/man-owner-dog-puppy-square-600w-1195628179.jpg";
    vetImg = "https://www.sgu.edu/blog/veterinary/wp-content/uploads/sites/3/2018/06/Whats-A-Vet-Square.jpg"
    
    constructor(props){
        super(props);
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            zipcode: "",
            imageURL: this.dogOwnerImg,
            role_id: "2",
            confirm_password: "",
        };
    }

    handleCheckboxChange = event =>
        this.setState(
            { role_id: event.target.checked ? 1 : 2,
              imageURL: event.target.checked ? this.vetImg : this.dogOwnerImg 
            })

    submit() {
        if (this.state.password != this.state.confirm_password) {
            alert("Your confirmed password does not match");
            return;
        }
        for (let val of Object.keys(this.state)) {
            if (this.state[val] === "") {
                alert("You have to fill all fields");
                return;
            }
        }

        this.api.getUserByEmail(this.state.email)
            .then(data => {
                console.log(data)
                if (data.code != 204) {
                    alert('This email is already used');
                    return;
                }
                this.register();
                
            })
    }

    register() {
        this.api.register(this.state)
            .then(() => {
                alert('Register successfully');
                window.location.reload(false);
            })
            .catch(x => alert(x));
    }

    render() {
        return(
            <div className="base-container">
                <div className = "header">Register</div>
                <div className = "content">
                    <div className="form">
                        <div className = "form-group">
                            <label htmlFor="Firstname">First Name</label>
                            <input type = "text" 
                                   id = "Firstname" 
                                   placeholder = "Firstname..."
                                   onChange = {e => this.setState({first_name: e.target.value})}
                            />

                            <label htmlFor="Lastname">Last Name</label>
                            <input type = "text" 
                                   id = "Lastname" 
                                   placeholder = "Lastname..."
                                   onChange = {e => this.setState({last_name: e.target.value})}
                            />

                            <label htmlFor="Vet">Are you a veteranarian?</label>
                            <input type="checkbox" 
                                   id="Vet"
                                   onChange={this.handleCheckboxChange}/>

                            <label htmlFor="ZipCode">Zip Code</label>
                            <input  type="text" 
                                    id="ZipCode" 
                                    placeholder="ZipCode..."
                                    onChange={e => this.setState({zipcode: e.target.value})}
                            />

                            <label htmlFor="email">Email</label>
                            <input  type = "email" 
                                    id = "email" 
                                    placeholder = "Email..."
                                    onChange={e => this.setState({email: e.target.value})}
                            />
                            
                            <label htmlFor="password">Password</label>
                            <input  type="password" 
                                    id="password" 
                                    placeholder = "Password..."
                                    onChange={e => this.setState({password: e.target.value})}
                            />
                            <label htmlFor="ConfPassword">Confirm Password</label>
                            <input  type="password" 
                                    id="ConfPassword" 
                                    placeholder = "Password..."
                                    onChange={e => this.setState({confirm_password: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div className="footer">
                <button className="btn btn-lg btn-primary" onClick={e => this.submit()}>
                    Register
                </button>
                </div>
            </div>
        )}
}