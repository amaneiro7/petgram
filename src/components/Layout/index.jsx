import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Logo } from '@/components/Logo'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { Helmet } from 'react-helmet'
import { Main, Subtitle, Title } from './style'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Main>
      <Helmet>
        {title && <title>{title} | Petgram🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <GlobalStyle />
      <Logo />
      <div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </div>
      {children}
      <Navbar />
    </Main>
  )
}
