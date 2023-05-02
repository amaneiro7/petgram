import React, { lazy } from 'react'
import PropTypes from 'prop-types'

const PhotoCard = lazy(() => import('@/components/PhotoCard').then(module => ({ default: module.PhotoCard })))

export const RenderListPhotoCard = ({ loading, data }) => {
  const loadingArray = [1, 2, 3, 4]
  return (
    <>
      {loading
        ? loadingArray.map(photo => <PhotoCard key={photo} />)
        : data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </>

  )
}

RenderListPhotoCard.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      liked: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      likes: function (props, propName) {
        const propValue = props[propName]
        if (propValue === undefined) return new Error(`${propName} value must be defined`)
        if (propValue < 0) return new Error(`${propName} value must be greater than 0`)
      }
    })
  )
}
