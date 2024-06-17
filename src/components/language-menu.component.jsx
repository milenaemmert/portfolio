import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { LANGUAGES } from '@constants'
import { useTranslation } from '@hooks'
import { languageIcon } from '@icons'

import s from './language-menu.module.css'

export const LanguageMenu = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { language, setLanguage, t } = useTranslation()

  const toggleClassName = isLanguageMenuOpen
    ? `${s.toggle} ${s.isToggleSelected}`
    : `${s.toggle}`

  const toggleTitle = isLanguageMenuOpen
    ? t('Fechar o menu de idiomas')
    : t('Abrir o menu de idiomas')

  const closeMenu = (option) => {
    if (language === option) return

    setLanguage(option)
    setIsLanguageMenuOpen(false)
  }

  const renderOptions = () => {
    const languages = Object.values(LANGUAGES)

    return (
      <AnimatePresence>
        {!!isLanguageMenuOpen && (
          <motion.div
            animate={{
              width: 'auto',
              marginRight: 12
            }}
            className={s.options}
            exit={{
              width: 0,
              marginRight: 0
            }}
            initial={{ width: 0, marginRight: 0 }}
            transition={{
              width: { duration: 0.3, ease: 'easeInOut' },
              marginRight: { duration: 0.5, ease: 'easeOut' }
            }}
          >
            {languages.map((option) => {
              const optionClassName =
                language === option
                  ? `${s.option} ${s.isOptionSelected}`
                  : s.option

              const title = t('Selecionar o idioma')

              return (
                <button
                  className={optionClassName}
                  key={option}
                  title={`${title} ${option}`}
                  type='button'
                  onClick={() => closeMenu(option)}
                >
                  {option}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <div className={s.languageMenu}>
      <button
        aria-label={toggleTitle}
        className={toggleClassName}
        title={toggleTitle}
        type='button'
        onClick={() => setIsLanguageMenuOpen((current) => !current)}
      >
        {languageIcon(s.icon)}
      </button>

      {renderOptions()}
    </div>
  )
}
