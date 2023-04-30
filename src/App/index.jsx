import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { ListOfCategories } from '../components/ListOfCategories'
import { Logo } from '../components/Logo'
import ErrorBoundary from './ErrorBoundary'
import { GlobalStyle } from '@/styles/GlobalStyles'

function App () {
  return (
    <ErrorBoundary>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard />
    </ErrorBoundary>
  )
}

export default App
