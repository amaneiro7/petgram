import React, { lazy } from 'react'

const Div = lazy(() => import('./style').then(module => ({ default: module.Div })))
const Span = lazy(() => import('./style').then(module => ({ default: module.Span })))

export const LoadingPage = () => {
  return (
    <Div>
      <Span />
    </Div>
  )
}
