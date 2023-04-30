import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import { useLocalStorage } from '@/Hooks/useLocalStorage'
import { usenearScreen } from '@/Hooks/useNearScreen'
import FavButton from '@/components/FavButton'
import { useMutationToggleLike } from '../../container/ToggleLikeMutation'
import { Link } from 'react-router-dom'

export function PhotoCard ({ id, likes = 0, src }) {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = usenearScreen()
  const { mutation, mutationError, mutationLoading } = useMutationToggleLike()

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='' />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }
    </Article>
  )
}
