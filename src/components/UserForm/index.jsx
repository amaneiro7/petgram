import React, { lazy } from 'react'
import { useInputValue } from '@/Hooks/useInputValue'
import PropTypes from 'prop-types'

const SubmitButton = lazy(() => import('@/components/SubmitButton').then(module => ({ default: module.SubmitButton })))
const Form = lazy(() => import('./style').then(module => ({ default: module.Form })))
const Input = lazy(() => import('./style').then(module => ({ default: module.Input })))
const Title = lazy(() => import('./style').then(module => ({ default: module.Title })))
const Error = lazy(() => import('./style').then(module => ({ default: module.Error })))

export const UserForm = ({ onSubmit, title, error, disabled }) => {
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
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        {error && <Error>{error}</Error>}
        <Input disabled={disabled} type='email' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
    </>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
