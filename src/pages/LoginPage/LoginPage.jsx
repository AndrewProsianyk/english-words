import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function LoginPage({login}) {
  return (
    <div>Login Page
      <LoginForm />
      <NavLink to="/registration">Registration</NavLink>
    </div>
  )
}
