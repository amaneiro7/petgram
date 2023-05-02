import React, { lazy } from 'react'
import { useInputValue } from '@/Hooks/useInputValue'
import PropTypes from 'prop-types'

const UserForm = lazy(() => import('@/components/UserForm').then(module => ({ default: module.UserForm })))

export const UserRegisterForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const name = useInputValue('')
  const username = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  const inputList = [
    { name: 'email', data: email, type: 'email', placeholder: 'Correo electrónico' },
    { name: 'username', data: username, type: 'text', placeholder: 'Nombre de usuario' },
    { name: 'name', data: name, type: 'text', placeholder: 'Nombre completo' },
    { name: 'password', data: password, type: 'password', placeholder: 'Contraseña' }
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
  onSubmit: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
