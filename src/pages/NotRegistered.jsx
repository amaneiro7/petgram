import React, { useContext } from 'react'
import { AppContext } from '@/context'
import { UserForm } from '@/components/UserForm'

export function NotRegistered () {
  const { activateAuth } = useContext(AppContext)
  return (
    <>
      <UserForm title='Registrarse' onSubmit={activateAuth} />
      <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
    </>
  )
}
