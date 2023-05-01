import React, { lazy } from 'react'
import PropTypes from 'prop-types'

const Grid = lazy(() => import('./style').then(module => ({ default: module.Grid })))
const Image = lazy(() => import('./style').then(module => ({ default: module.Image })))
const Link = lazy(() => import('./style').then(module => ({ default: module.Link })))

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map(fav =>
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </Link>)}
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
