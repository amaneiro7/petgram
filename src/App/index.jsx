import ErrorBoundary from './ErrorBoundary'
import { Logo } from '@/components/Logo'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { PhotoCardWithQuery } from '@/container/PhotoCardWithQuery'
// import { NavRoutes } from '@/Routes'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

function App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <ErrorBoundary>
      <div>
        <Logo />
        <GlobalStyle />
        {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (<BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pet/:id' element={<Home />} />
            </Routes>
          </BrowserRouter>
            )
}
      </div>
    </ErrorBoundary>
  )
}

export default App
