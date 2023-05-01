import { gql, useQuery } from '@apollo/client'
import { ListOfFavs } from '@/components/ListOfFavs'

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
  console.log('favs', favs)
  console.log('data', data)
  if (!favs.length) return <p>No ha seleccionado ninguna animalito como favorito</p>
  if (favs.length) return <ListOfFavs favs={favs} />
}
