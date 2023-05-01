import React, { lazy } from 'react'
import { gql, useQuery } from '@apollo/client'
import PropTypes from 'prop-types'

const RenderListPhotoCard = lazy(() => import('./RenderListPhotoCard.jsx').then(module => ({ default: module.RenderListPhotoCard })))

const getPhotos = gql`
  query getPhotos ($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })

  if (error) return <h2>Internal Server Error</h2>

  return (
    <ul>
      <RenderListPhotoCard data={data} loading={loading} />
    </ul>
  )
}

ListOfPhotoCard.propTypes = {
  categoryId: PropTypes.string
}
