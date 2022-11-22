import React from 'react'
import { Link } from 'react-router-dom'
import './Theme.scss'

export default function Theme({ name, path }) {
  return (
    <Link to={path} className='theme-folder'>
        {name}
    </Link>
  )
}
