import React from 'react'
import { Redirect } from 'react-router-dom'
import { VetEditor } from '../Vet'
import { UserEditor } from '../Profile'

export function Editor(props) {
  let role_id = localStorage.getItem('role_id');

  if (!role_id) {
    return <Redirect to='/'/>
  }
  else if (role_id == 1) {
    return <VetEditor/>
  }
  else {
    return <UserEditor/>
  }
}