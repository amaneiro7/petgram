import React, { Suspense, lazy, useContext } from 'react'
import { AppContext } from '@/context'
import { useLoginMutation } from '@/container/LoginMutation'

const UserLoginForm = lazy(() => import('@/components/UserLoginForm').then(module => ({ default: module.UserLoginForm })))

export const Login = () => {
  const { activateAuth } = useContext(AppContext)
  const { loginMutation, loading, error } = useLoginMutation()

  const onLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorLoginMsg = error && 'Contraseña incorrecta o el usuario no existe'

  return (
    <Suspense>
      <UserLoginForm title='Iniciar sesión' onSubmit={onLogin} error={errorLoginMsg} disabled={loading} />
    </Suspense>
  )
}
