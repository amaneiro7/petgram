import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { RenderListPhotoCard } from './RenderListPhotoCard'

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

export function ListOfPhotoCard ({ categoryId }) {
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })

  if (error) return <h2>Internal Server Error</h2>

  return (
    <ul>
      <RenderListPhotoCard data={data} loading={loading} />
    </ul>
  )
}
