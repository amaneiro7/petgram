import PropTypes from 'prop-types'
import React, { lazy } from 'react'

const MdFavorite = lazy(() => import('react-icons/md').then(module => ({ default: module.MdFavorite })))
const MdFavoriteBorder = lazy(() => import('react-icons/md').then(module => ({ default: module.MdFavoriteBorder })))
const Button = lazy(() => import('./styles').then(module => ({ default: module.Button })))

export const FavButton = ({ likes, liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='24px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
