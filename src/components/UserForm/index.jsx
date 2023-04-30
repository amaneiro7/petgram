import React from 'react'
import { useInputValue } from '@/Hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './style'

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
  console.log(disabled)
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        {error && <Error>{error}</Error>}
        <Input disabled={disabled} type='email' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
    </>
  )
}
