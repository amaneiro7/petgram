import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'

export default function NavRoute () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}
