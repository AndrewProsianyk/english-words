import React from 'react'

export default function LoginPage({login, logout, name}) {
  return (
      <div>Login Page
          <button onClick={login}>login</button>
          <button onClick={logout}>logout</button>
          <span>{name}</span>
    </div>
  )
}
