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
const Small = lazy(() => import('./style').then(module => ({ default: module.Small })))

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

  return (
    <Wrapper>
      <Section>
        <Title>Regístrate para ver fotos y videos de animales domésticos</Title>
        <Form onSubmit={handleSubmit}>
          {error && <Error>{error}</Error>}
          <Input disabled={disabled} type='email' placeholder='Correo electrónico' {...email} />
          <Input disabled={disabled} type='text' placeholder='Nombre Completo' {...name} />
          <Input disabled={disabled} type='text' placeholder='Nombre de usuario' {...username} />
          <Input disabled={disabled} type='password' placeholder='Contraseña' {...password} />
          <Small>Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. Más información <br />
          </Small>
          <Small>Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.</Small>
          <SubmitButton disabled={disabled}>Registrarte</SubmitButton>
        </Form>
      </Section>
      <Section>
        <P>¿Tienes una cuenta? <Link to='/login'>Inicia sesión</Link></P>
      </Section>
    </Wrapper>
  )
}

UserRegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
