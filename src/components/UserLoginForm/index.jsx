import React, { lazy } from 'react'
import { useInputValue } from '@/Hooks/useInputValue'
import PropTypes from 'prop-types'

const SubmitButton = lazy(() => import('@/components/SubmitButton').then(module => ({ default: module.SubmitButton })))
const Form = lazy(() => import('./style').then(module => ({ default: module.Form })))
const Input = lazy(() => import('./style').then(module => ({ default: module.Input })))
const Title = lazy(() => import('./style').then(module => ({ default: module.Title })))
const Error = lazy(() => import('./style').then(module => ({ default: module.Error })))
const Section = lazy(() => import('./style').then(module => ({ default: module.Section })))
const Link = lazy(() => import('./style').then(module => ({ default: module.Link })))
const P = lazy(() => import('./style').then(module => ({ default: module.P })))
const Wrapper = lazy(() => import('./style').then(module => ({ default: module.Wrapper })))

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

  return (
    <Wrapper>
      <Section>
        <Title>Iniciar sesión</Title>
        <Form onSubmit={handleSubmit}>
          {error && <Error>{error}</Error>}
          <Input disabled={disabled} type='email' placeholder='Correo electrónico' {...email} />
          <Input disabled={disabled} type='password' placeholder='Contraseña' {...password} />
          <SubmitButton disabled={disabled}>{title}</SubmitButton>
        </Form>
      </Section>
      <Section>
        <P>¿No tienes una cuenta? <Link to='/register'>Regístrate</Link></P>
      </Section>
    </Wrapper>
  )
}

UserLoginForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
