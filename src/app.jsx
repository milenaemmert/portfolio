import { clarity } from 'react-microsoft-clarity'

import { Footer, Header } from '@components'
import { MainScreen } from '@screens'

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
