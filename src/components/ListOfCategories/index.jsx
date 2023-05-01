import React, { memo, useEffect, useState } from 'react'
import { RenderList } from './RenderList'

const ListOfCategoriesComponents = () => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <>
      <RenderList />
      {showFixed && <RenderList fixed />}
    </>
  )
}

export const ListOfCategories = memo(ListOfCategoriesComponents)
