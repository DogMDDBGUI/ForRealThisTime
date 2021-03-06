import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavBar } from '../HomePage'
import { ProductRepository } from '../../Api/productRepository'

export class VetEditor extends React.Component {
  api = new ProductRepository();

  state = {
    code: 201,
  };

  submit() {
    this.api.updateUser(this.state)
      .then(
        resp => {
          (setTimeout(() => this.setState({code: resp.code}), 100))
        }
      )
      .catch(e => alert(e));
  }

  render() {
    if (this.state.code == 200) {
      return <Redirect to="/user" />
    }
    if (this.state.code == 204) {
      alert("Invalid update");
      this.setState({code: 201});
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
                <label htmlFor="firstName" >First Name: </label>
                <input type="text" 
                       id="firstName" 
                       className="form-control"
                       value={this.state.first_name} 
                       onChange={e => this.setState({first_name: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="lastName" >Last Name: </label>
                <input type="text" 
                       id="lastName" 
                       className="form-control"
                       value={this.state.last_name} 
                       onChange={e => this.setState({last_name: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="zipcode" >Zipcode: </label>
                <input type="number" 
                       id="zipcode" 
                       className="form-control"
                       value={this.state.zipcode} 
                       onChange={e => this.setState({zipcode: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="years_experience" >Years of Experience: </label>
                <input type="number" 
                       id="years_experience" 
                       className="form-control"
                       value={this.state.years_experience} 
                       onChange={e => this.setState({years_experience: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="ratings" >Ratings: </label>
                <input type="number" 
                       id="ratings" 
                       className="form-control"
                       value={this.state.ratings} 
                       onChange={e => this.setState({ratings: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="imageURL">Image URL: </label>
                <input type="text" 
                       id="imageURL" 
                       className="form-control"
                       value={this.state.imageURL} 
                       onChange={e => this.setState({imageURL: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="skills">Skills: </label>
                <input type="text" 
                       id="skills" 
                       className="form-control"
                       value={this.state.skills} 
                       onChange={e => this.setState({skills: e.target.value})}/>
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
    this.api.getVet(localStorage.getItem('id'))
      .then(user => this.setState(user));
  }
}