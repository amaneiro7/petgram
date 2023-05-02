import React, { lazy, useRef } from 'react'
import PropTypes from 'prop-types'

const UserForm = lazy(() => import('@/components/UserForm').then(module => ({ default: module.UserForm })))

export const UserLoginForm = ({ onSubmit, title, error, disabled }) => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
  }

  const inputList = [
    { name: 'email', ref: emailRef, type: 'email', placeholder: 'Correo electrónico', autoComplete: 'email' },
    { name: 'password', ref: passwordRef, type: 'password', placeholder: 'Contraseña', autoComplete: 'current-password' }
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
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
