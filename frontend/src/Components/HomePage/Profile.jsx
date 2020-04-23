import React from 'react'
import { Redirect } from 'react-router-dom'
import { VetProfile } from '../Vet/Profile'
import { UserProfile } from '../Profile/UserProfile'
import { ProductRepository } from '../../Api/productRepository'


export class Profile extends React.Component {
  api = new ProductRepository();
  state = {};
  render() {
    let role_id = localStorage.getItem('role_id')
    if (!role_id) {
      return <Redirect to='/' />
    }
    else if (role_id == 1) {
      return <VetProfile user={this.state}/>
    }
    else {
      return <UserProfile user={this.state}/>
    }
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    this.api.getUser(id)
        .then(user => {
          this.setState(user);
          this.setState({password: ''});
        })
  }
} 