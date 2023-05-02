import React, { Suspense, lazy, useContext } from 'react'
import { AppContext } from '@/context'
import { useRegisterMutation } from '@/container/RegisterMutation'

const UserRegisterForm = lazy(() => import('@/components/UserRegisterForm').then(module => ({ default: module.UserRegisterForm })))

export const NotRegistered = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation, loading, error } = useRegisterMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }
  const errorMsg = error && 'El usuario ya existe o hay algún problema.'

  return (
    <Suspense>
      <UserRegisterForm title='Regístrate para ver fotos y videos de animales domésticos' onSubmit={onSubmit} error={errorMsg} disabled={loading} />
    </Suspense>
  )
}
