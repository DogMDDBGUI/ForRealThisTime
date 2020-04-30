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
        <div className="container">
          <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2009/01/12215922/dog-at-vet-800x534.jpg" 
               alt="homepage"
               width="90%"/>

        </div>
      </>
    );
  }
  componentDidMount() {
    this.api.getUser(localStorage.getItem('id'))
        .then(data => {
          this.setState({name: data.first_name});
        })
        .catch(x => alert(x));
  }
}