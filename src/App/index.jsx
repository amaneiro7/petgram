import ErrorBoundary from './ErrorBoundary'
import { Logo } from '@/components/Logo'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import { Detail } from '@/pages/Detail'

function App () {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div>
          <Logo />
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
            <Route path='/detail/:detailId' element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
