import React, { createContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    },
    LoginAuthRoute: ({ children }) => {
      const location = useLocation()
      if (!isAuth) return <Navigate to='/register' state={{ from: location }} replace />
      return children
    },
    NoLoginAuthRoute: ({ children }) => {
      const location = useLocation()
      if (isAuth) return <Navigate to='/' state={{ from: location }} replace />
      return children
    }
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
