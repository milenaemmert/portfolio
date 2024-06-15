import ReactDOM from 'react-dom/client'
import { TranslationProvider, HeaderProvider } from './contexts'
import { App } from './app'
import './assets/style/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TranslationProvider>
    <HeaderProvider>
      <App />
    </HeaderProvider>
  </TranslationProvider>
)
