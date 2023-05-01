import React, { Suspense, lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'

const Favs = lazy(() => import('@/pages/Favs').then(module => ({ default: module.Favs })))
const User = lazy(() => import('@/pages/User').then(module => ({ default: module.User })))
const NotRegistered = lazy(() => import('@/pages/NotRegistered').then(module => ({ default: module.NotRegistered })))

export const authenticatedRoute = () => (
  <>
    <Route path='/favs' element={<Suspense fallback={<p>Loading...</p>}><Favs /></Suspense>} />
    <Route path='/user' element={<Suspense fallback={<p>Loading...</p>}><User /></Suspense>} />
    <Route path='/login' element={<Navigate to='/user' replace />} />
  </>)

export const protectedRoute = () => (
  <>
    <Route path='/login' element={<Suspense fallback={<p>Loading...</p>}><NotRegistered /></Suspense>} />
    <Route path='/favs' element={<Navigate to='/login' replace />} />
    <Route path='/user' element={<Navigate to='/login' replace />} />
  </>)
