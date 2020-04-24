import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavBar } from '../HomePage'
import { ProductRepository } from '../../Api/productRepository'

export class UserEditor extends React.Component {
  api = new ProductRepository();

  state = {
    redirect: false,
  };

  submit() {
    this.api.updateUser(this.state)
      .then(
        setTimeout(() => this.setState({redirect: true}), 100)
      );
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/user" />
    }
    return(
      <>
        <NavBar/>
        
        <div className="content">
          <div className="title mb-3">
            <h3>
              Editor
            </h3>
          </div>
          <div className="container d-block pl-5 pr-5">    
            <form>
              <div className="form-group">
                <label for="firstName" >First Name: </label>
                <input type="text" 
                       id="firstName" 
                       className="form-control"
                       value={this.state.first_name} 
                       onChange={e => this.setState({first_name: e.target.value})}/>
              </div>
              <div className="form-group">
                <label for="lastName" >Last Name: </label>
                <input type="text" 
                       id="lastName" 
                       className="form-control"
                       value={this.state.last_name} 
                       onChange={e => this.setState({last_name: e.target.value})}/>
              </div>
              <div className="form-group">
                <label for="zipcode" >Zipcode: </label>
                <input type="number" 
                       id="zipcode" 
                       className="form-control"
                       value={this.state.zipcode} 
                       onChange={e => this.setState({zipcode: e.target.value})}/>
              </div>
              <div className="form-group">
                <label for="imageURL">Image URL: </label>
                <input type="text" 
                       id="imageURL" 
                       className="form-control"
                       value={this.state.imageURL} 
                       onChange={e => this.setState({imageURL: e.target.value})}/>
              </div>
              <button type="button" 
                      onClick={() => this.submit()}
                      className="mt-5 btn btn-block btn-success">
                Update
              </button>
            </form>
          </div>      
        </div>        
      </>
    )
  }

  componentDidMount() {
    this.api.getUser(localStorage.getItem('id'))
      .then(user => this.setState(user));
  }
}