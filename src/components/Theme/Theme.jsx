import React from 'react'
import { NavLink } from 'react-router-dom'
import './Theme.scss'

export default function Theme({name}) {
  return (
    <NavLink to='/folder' className='theme-folder'>
        {name}
    </NavLink>
  )
}
