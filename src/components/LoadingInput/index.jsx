import React, { lazy } from 'react'

const Loader = lazy(() => import('./style').then(module => ({ default: module.Loader })))

export const LoadingInput = () => {
  return (
    <Loader />
  )
}
