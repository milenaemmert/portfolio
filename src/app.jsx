import { clarity } from 'react-microsoft-clarity'
import { MainScreen } from './screens'
import { Header, Footer } from './components'

export const App = () => {
  if (import.meta.env.PROD) clarity.init('moi8lh6bse')

  return (
    <>
      <Header />
      <MainScreen />
      <Footer />
    </>
  )
}
