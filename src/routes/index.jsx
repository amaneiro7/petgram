import React, { Suspense, lazy, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from '@/context'
import { LoadingPage } from '../components/LoadingPage'

const Home = lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })))
const Detail = lazy(() => import('@/pages/Detail').then(module => ({ default: module.Detail })))
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })))
const Favs = lazy(() => import('@/pages/Favs').then(module => ({ default: module.Favs })))
const User = lazy(() => import('@/pages/User').then(module => ({ default: module.User })))
const NotRegistered = lazy(() => import('@/pages/NotRegistered').then(module => ({ default: module.NotRegistered })))
const Login = lazy(() => import('@/pages/Login').then(module => ({ default: module.Login })))

export const PublicRoute = () => {
  const { LoginAuthRoute, NoLoginAuthRoute } = useContext(AppContext)
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path='/' element={<LoginAuthRoute><Home /></LoginAuthRoute>} />
        <Route path='/pet/:id' element={<LoginAuthRoute><Home /></LoginAuthRoute>} />
        <Route path='/favs' element={<LoginAuthRoute><Favs /></LoginAuthRoute>} />
        <Route path='/user' element={<LoginAuthRoute><User /></LoginAuthRoute>} />
        <Route path='/detail/:detailId' element={<LoginAuthRoute><Detail /></LoginAuthRoute>} />
        <Route path='/login' element={<NoLoginAuthRoute><Login /></NoLoginAuthRoute>} />
        <Route path='/register' element={<NoLoginAuthRoute><NotRegistered /></NoLoginAuthRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
