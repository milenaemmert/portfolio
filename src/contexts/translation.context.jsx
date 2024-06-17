import PropTypes from 'prop-types'
import { createContext, useCallback, useMemo, useState } from 'react'

import { LANGUAGES, TRANSLATIONS } from '@constants'

export const TranslationContext = createContext()

export const TranslationProvider = ({ children }) => {
  const getBrowserLanguage = () => {
    const browserLanguage = navigator.language

    const defaultLanguage = Object.values(LANGUAGES).find((lang) =>
      browserLanguage?.includes(lang)
    )

    return defaultLanguage || LANGUAGES.PT
  }

  const [language, setLanguage] = useState(getBrowserLanguage())

  const handleTranslation = useCallback(
    (text) => {
      return TRANSLATIONS[text]?.[language] || text
    },
    [language]
  )

  const value = useMemo(
    () => ({ language, setLanguage, t: handleTranslation }),
    [language, handleTranslation]
  )

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

TranslationProvider.propTypes = {
  children: PropTypes.node.isRequired
}
