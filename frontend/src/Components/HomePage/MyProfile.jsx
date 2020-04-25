import React from 'react'
import { Redirect } from 'react-router-dom'


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