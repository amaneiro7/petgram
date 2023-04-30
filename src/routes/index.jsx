import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Detail } from '@/pages/Detail'
import { authenticatedRoute, protectedRoute } from './PrivateRoute'
const isAuth = false

export function PublicRoute () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        {isAuth
          ? authenticatedRoute()
          : protectedRoute()}
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </>
  )
}
