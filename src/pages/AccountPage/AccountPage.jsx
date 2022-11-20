import React from 'react'
import { useDispatch } from 'react-redux'
import operations from '../../redux/auth/auth-operations'

export default function AccountPage() {
  const dispatch = useDispatch()

  const onButtonClick = () => {
    dispatch(operations.logout())
  }

  return (
      <div>AccountPage
          <button onClick={onButtonClick}>logout</button>
      </div>
  )
}
