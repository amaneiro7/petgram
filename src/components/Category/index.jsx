import React, { lazy } from 'react'
import PropTypes from 'prop-types'

const Link = lazy(() => import('./style').then(module => ({ default: module.Link })))
const Image = lazy(() => import('./style').then(module => ({ default: module.Image })))

export const Category = ({ cover, path, emoji = '?', loading }) => {
  return (
    <Link to={path}>
      <Image src={cover} alt='' loading={loading} />
      {emoji}
    </Link>
  )
}

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string,
  loading: PropTypes.bool
}
