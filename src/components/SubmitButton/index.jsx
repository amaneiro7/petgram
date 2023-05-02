import React, { lazy } from 'react'
import PropTypes from 'prop-types'

const Button = lazy(() => import('./style').then(module => ({ default: module.Button })))
const LoadingInput = lazy(() => import('@/components/LoadingInput').then(module => ({ default: module.LoadingInput })))

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>{disabled ? <LoadingInput /> : children}</Button>
  )
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
