import React from 'react'
import { Button } from './style'

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>{children}</Button>
  )
}
