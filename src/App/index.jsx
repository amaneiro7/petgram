import { ListOfCategories } from '@/components/ListOfCategories'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { ListOfPhotoCard } from '@/components/ListOfPhotoCard'
import { Logo } from '@/components/Logo'
function App () {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}

export default App
