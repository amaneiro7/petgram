import React, { lazy } from 'react'

const MdHome = lazy(() => import('react-icons/md').then(module => ({ default: module.MdHome })))
const MdOutlineFavoriteBorder = lazy(() => import('react-icons/md').then(module => ({ default: module.MdOutlineFavoriteBorder })))
const MdPersonOutline = lazy(() => import('react-icons/md').then(module => ({ default: module.MdPersonOutline })))
const Link = lazy(() => import('./style').then(module => ({ default: module.Link })))
const Nav = lazy(() => import('./style').then(module => ({ default: module.Nav })))

const SIZE = '32px'

export function Navbar () {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favs'><MdOutlineFavoriteBorder size={SIZE} /></Link>
      <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
