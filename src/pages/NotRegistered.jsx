import React, { Suspense, lazy, useContext } from 'react'
import { AppContext } from '@/context'
import { useRegisterMutation } from '@/container/RegisterMutation'
import { useLoginMutation } from '@/container/LoginMutation'

const UserForm = lazy(() => import('@/components/UserForm').then(module => ({ default: module.UserForm })))

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
    <Suspense>
      <UserForm title='Registrarse' onSubmit={onSubmit} error={errorMsg} disabled={loading} />
      <UserForm title='Iniciar sesión' onSubmit={onLogin} error={errorLoginMsg} disabled={loginLoading} />
    </Suspense>
  )
}
