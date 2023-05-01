import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Favs } from '@/pages/Favs'
import { NotRegistered } from '@/pages/NotRegistered'
import { User } from '@/pages/User'

export const authenticatedRoute = () => (
  <>
    <Route path='/favs' element={<Favs />} />
    <Route path='/user' element={<User />} />
    <Route path='/login' element={<Navigate to='/user' replace />} />
  </>)

export const protectedRoute = () => (
  <>
    <Route path='/login' element={<NotRegistered />} />
    <Route path='/favs' element={<Navigate to='/login' replace />} />
    <Route path='/user' element={<Navigate to='/login' replace />} />
  </>)
