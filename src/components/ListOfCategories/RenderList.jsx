import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import { useCategoriesData } from '@/Hooks/useCategoriesData'

const Category = lazy(() => import('@/components/Category').then(module => ({ default: module.Category })))
const List = lazy(() => import('./style').then(module => ({ default: module.List })))
const Item = lazy(() => import('./style').then(module => ({ default: module.Item })))

export const RenderList = ({ fixed }) => {
  const { categories, loading } = useCategoriesData()
  return (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>)
        : categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)}
    </List>
  )
}

RenderList.propTypes = {
  fixed: PropTypes.bool
}
