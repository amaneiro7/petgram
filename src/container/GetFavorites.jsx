import { gql, useQuery } from '@apollo/client'
import { Suspense, lazy } from 'react'

const ListOfFavs = lazy(() => import('@/components/ListOfFavs').then(module => ({ default: module.ListOfFavs })))

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const FavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })
  return { loading, data, error }
}

export const RenderFavs = () => {
  const { loading, data, error } = FavsWithQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const { favs } = data
  if (!favs.length) return <p>No ha seleccionado ninguna animalito como favorito</p>
  if (favs.length) return <Suspense><ListOfFavs favs={favs} /></Suspense>
}
