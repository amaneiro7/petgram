import { ListOfPhotoCard } from '@/components/ListOfPhotoCard'
import { ListOfCategories } from '@/components/ListOfCategories'
import { Logo } from '@/components/Logo'
import ErrorBoundary from './ErrorBoundary'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { PhotoCardWithQuery } from '@/container/PhotoCardWithQuery'

function App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <ErrorBoundary>
      <div>
        <Logo />
        <GlobalStyle />
        {detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCard />
          </>}
      </div>
    </ErrorBoundary>
  )
}

export default App
