import React, { lazy } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const Navbar = lazy(() => import('@/components/Navbar').then(module => ({ default: module.Navbar })))
const Logo = lazy(() => import('@/components/Logo').then(module => ({ default: module.Logo })))
const GlobalStyle = lazy(() => import('@/styles/GlobalStyles').then(module => ({ default: module.GlobalStyle })))
const Main = lazy(() => import('./style').then(module => ({ default: module.Main })))
const Subtitle = lazy(() => import('./style').then(module => ({ default: module.Subtitle })))
const Title = lazy(() => import('./style').then(module => ({ default: module.Title })))

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

Layout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}
