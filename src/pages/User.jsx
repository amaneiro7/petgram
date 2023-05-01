import React, { lazy, useContext } from 'react'
import { AppContext } from '@/context'

const SubmitButton = lazy(() => import('@/components/SubmitButton').then(module => ({ default: module.SubmitButton })))

export const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <>
      <h2>User</h2>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
