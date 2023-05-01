import React, { useContext } from 'react'
import { AppContext } from '@/context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <>
      <div>User</div>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
