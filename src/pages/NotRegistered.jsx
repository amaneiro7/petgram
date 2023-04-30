import React, { useContext } from 'react'
import { AppContext } from '@/context'
import { UserForm } from '@/components/UserForm'
import { useRegisterMutation } from '@/container/RegisterMutation'
import { useLoginMutation } from '@/container/LoginMutation'

export const NotRegistered = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation, loading, error } = useRegisterMutation()
  const { loginMutation, loading: loginLoading, error: loginError } = useLoginMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const onLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorMsg = error && 'El usuario ya existe o hay algún problema.'
  const errorLoginMsg = loginError && 'Contraseña incorrecta o el usuario no existe'

  return (
    <>
      <UserForm title='Registrarse' onSubmit={onSubmit} error={errorMsg} disabled={loading} />
      <UserForm title='Iniciar sesión' onSubmit={onLogin} error={errorLoginMsg} disabled={loginLoading} />
    </>
  )
}
