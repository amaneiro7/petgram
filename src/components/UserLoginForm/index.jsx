import React, { lazy } from 'react'
import { useInputValue } from '@/Hooks/useInputValue'
import PropTypes from 'prop-types'

const UserForm = lazy(() => import('@/components/UserForm').then(module => ({ default: module.UserForm })))

export const UserLoginForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  const inputList = [
    {
      name: 'email',
      data: email,
      type: 'email',
      placeholder: 'Correo electrónico'
    },
    {
      name: 'password',
      data: password,
      type: 'password',
      placeholder: 'Contraseña'
    }
  ]

  return (
    <UserForm
      handleSubmit={handleSubmit}
      title={title}
      error={error}
      disabled={disabled}
      link='/register'
      linkTitle='Regístrate'
      linkInfo='¿No tienes una cuenta?'
      InputList={inputList}
      buttonActionName='Iniciar sesión'
    />
  )
}

UserLoginForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
