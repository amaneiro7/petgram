import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { PublicRoute } from '@/routes'

function App () {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <PublicRoute />
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
