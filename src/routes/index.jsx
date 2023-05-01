import React, { Suspense, lazy, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from '@/context'
import { authenticatedRoute, protectedRoute } from './PrivateRoute'

const Home = lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })))
const Detail = lazy(() => import('@/pages/Detail').then(module => ({ default: module.Detail })))
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })))

export const PublicRoute = () => {
  const { isAuth } = useContext(AppContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Suspense fallback={<p>Loading...</p>}><Home /></Suspense>} />
        <Route path='/pet/:id' element={<Suspense fallback={<p>Loading...</p>}><Home /></Suspense>} />
        <Route path='/detail/:detailId' element={<Suspense fallback={<p>Loading...</p>}><Detail /></Suspense>} />
        {isAuth
          ? authenticatedRoute()
          : protectedRoute()}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
