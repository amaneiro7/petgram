import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import { Detail } from '@/pages/Detail'
import { Layout } from '@/components/Layout'

function App () {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
            <Route path='/detail/:detailId' element={<Detail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
