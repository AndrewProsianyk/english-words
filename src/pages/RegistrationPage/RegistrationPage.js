import React from 'react'
import { NavLink } from 'react-router-dom'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default function RegistrationPage() {
    return (
        <div>Registration
            <RegistrationForm />
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}