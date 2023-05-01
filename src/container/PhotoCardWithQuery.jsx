import { gql, useQuery } from '@apollo/client'
import { lazy } from 'react'

const RenderPhotoCardWithQuery = lazy(() => import('./RenderPhotoCardWithQuery').then(module => ({ default: module.RenderPhotoCardWithQuery })))

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
          id
          categoryId
          src
          likes
          liked
          userId
    }
  }
`

export function PhotoCardWithQuery ({ id }) {
  const getSinglePhotoData = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id
    }
  })

  return <RenderPhotoCardWithQuery {...getSinglePhotoData} />
}
