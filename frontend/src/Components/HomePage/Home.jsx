import React from 'react'
import { NavBar } from "./NavBar"
import { Redirect } from 'react-router-dom'
import { ProductRepository } from '../../Api/productRepository'

export class Home extends React.Component {
  api = new ProductRepository();

  state = {
    name: ""
  }

  render() {
    if (!localStorage.getItem('id')) {
      return <Redirect to='/' />
    }
    return (
      <>
        <NavBar/>
        <div className="container">
          <h3>Welcome back, {this.state.name}!</h3>    
        </div>
      </>
    );
  }
  componentDidMount() {
    this.api.getUser(localStorage.getItem('id'))
        .then(data => {
          this.setState({name: data.first_name});
          console.log(data);
        })
        .catch(x => alert(x));
  }
}