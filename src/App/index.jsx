import { Suspense, lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'

const Layout = lazy(() => import('@/components/Layout').then(module => ({ default: module.Layout })))
const PublicRoute = lazy(() => import('@/routes').then(module => ({ default: module.PublicRoute })))

function App () {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Layout>
            <PublicRoute />
          </Layout>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
