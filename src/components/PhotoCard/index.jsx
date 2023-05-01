import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
// import { useLocalStorage } from '@/Hooks/useLocalStorage'
import { useNearScreen } from '@/Hooks/useNearScreen'
import { useMutationToggleLike } from '@/container/ToggleLikeMutation'
import PropTypes from 'prop-types'

const FavButton = lazy(() => import('@/components/FavButton').then(module => ({ default: module.FavButton })))
const Article = lazy(() => import('./style').then(module => ({ default: module.Article })))
const Img = lazy(() => import('./style').then(module => ({ default: module.Img })))
const ImgWrapper = lazy(() => import('./style').then(module => ({ default: module.ImgWrapper })))

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const { mutation } = useMutationToggleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName) {
    const propValue = props[propName]
    if (propValue === undefined) return new Error(`${propName} value must be defined`)
    if (propValue < 0) return new Error(`${propName} value must be greater than 0`)
  }
}
