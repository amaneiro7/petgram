import React, { lazy, useRef } from 'react'
import PropTypes from 'prop-types'

const UserForm = lazy(() => import('@/components/UserForm').then(module => ({ default: module.UserForm })))

export const UserRegisterForm = ({ onSubmit, title, error, disabled }) => {
  const emailRef = useRef('')
  const name = useRef('')
  const username = useRef('')
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
    { name: 'username', ref: name, type: 'text', placeholder: 'Nombre de usuario', autoComplete: 'username' },
    { name: 'name', ref: username, type: 'text', placeholder: 'Nombre completo', autoComplete: 'name' },
    { name: 'password', ref: passwordRef, type: 'password', placeholder: 'Contraseña', autoComplete: 'new-password' }
  ]

  return (
    <UserForm
      handleSubmit={handleSubmit}
      title={title}
      error={error}
      disabled={disabled}
      link='/login'
      linkTitle='Inicia sesión'
      linkInfo='Tienes una cuenta?'
      InputList={inputList}
      buttonActionName='Registrarte'
    >
      Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. Más información
      <br />
      <br />
      Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.
    </UserForm>
  )
}

UserRegisterForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
