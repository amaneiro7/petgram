import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import { useLocalStorage } from '@/Hooks/useLocalStorage'
import { usenearScreen } from '@/Hooks/useNearScreen'
import FavButton from '@/components/FavButton'
import { useMutationToggleLike } from '../../container/ToggleLikeMutation'

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
    console.log('{mutation, mutationError, mutationLoading}', { mutation, mutationError, mutationLoading })
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt='' />
              </ImgWrapper>
            </a>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }
    </Article>
  )
}
