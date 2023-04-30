import React from 'react'
import { Route } from 'react-router-dom'
import { Favs } from '@/pages/Favs'
import { NotRegistered } from '@/pages/NotRegistered'
import { User } from '@/pages/User'

export const authenticatedRoute = () => (
  <>
    <Route path='/favs' element={<Favs />} />
    <Route path='/user' element={<User />} />
  </>)

export const protectedRoute = () => (
  <>
    <Route path='/favs' element={<NotRegistered />} />
    <Route path='/user' element={<NotRegistered />} />
  </>)
