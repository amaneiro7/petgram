import { gql, useQuery } from '@apollo/client'
import RenderPhotoCardWithQuery from './RenderPhotoCardWithQuery'

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
