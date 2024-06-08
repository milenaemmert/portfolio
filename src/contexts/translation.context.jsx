import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { TRANSLATIONS, LANGUAGES } from '../constants'

export const TranslationContext = createContext()

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(getBrowserLanguage())

  function getBrowserLanguage() {
    if (navigator.language?.includes(LANGUAGES.EN)) {
      return LANGUAGES.EN
    }

    return LANGUAGES.PT
  }

  function handleTranslation(text) {
    return TRANSLATIONS[text]?.[language] || text
  }

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage, t: handleTranslation }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

TranslationProvider.propTypes = {
  children: PropTypes.node.isRequired
}
