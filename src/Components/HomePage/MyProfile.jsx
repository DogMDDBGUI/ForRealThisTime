import React from 'react'
import { Redirect } from 'react-router-dom'
import { VetProfile } from '../Vet/Profile'
import { UserProfile } from '../Profile/UserProfile'
import { ProductRepository } from '../../Api/productRepository'


export function MyProfile(props) {
  let id = localStorage.getItem('id');
  let role_id = localStorage.getItem('role_id');
  let link = `/user/${id}`;
   
  if (!role_id) {
    return <Redirect to='/' />
  }
  else {
    return <Redirect to={link} />
  }
} 