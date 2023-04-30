import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Logo } from '@/components/Logo'
import { GlobalStyle } from '@/styles/GlobalStyles'

export function Layout ({ children }) {
  return (
    <main>
      <GlobalStyle />
      <Logo />
      {children}
      <Navbar />
    </main>
  )
}
