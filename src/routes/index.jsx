import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Detail } from '@/pages/Detail'
import { NotFound } from '@/pages/NotFound'
import { AppContext } from '@/context'
import { authenticatedRoute, protectedRoute } from './PrivateRoute'

export function PublicRoute () {
  const { isAuth } = useContext(AppContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        {isAuth
          ? authenticatedRoute()
          : protectedRoute()}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
