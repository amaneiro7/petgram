import React, { Suspense, lazy, memo, useEffect, useState } from 'react'

const RenderList = lazy(() => import('./RenderList').then(module => ({ default: module.RenderList })))

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
    <Suspense>
      <RenderList />
      {showFixed && <RenderList fixed />}
    </Suspense>
  )
}

export const ListOfCategories = memo(ListOfCategoriesComponents)
