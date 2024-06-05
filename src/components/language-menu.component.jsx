import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { languageIcon } from '../assets/icons'
import { LANGUAGES } from '../constants'
import { useTranslation } from '../hooks'
import s from './language-menu.module.css'

export const LanguageMenu = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { language, setLanguage, t } = useTranslation()

  function closeMenu(option) {
    if (language === option) return

    setLanguage(option)
    setIsLanguageMenuOpen(false)
  }

  function renderOptions() {
    const languages = Object.values(LANGUAGES)

    return (
      <AnimatePresence>
        {isLanguageMenuOpen && (
          <motion.div
            className={s.options}
            initial={{ width: 0, marginRight: 0 }}
            animate={{
              width: 'auto',
              marginRight: 12
            }}
            exit={{
              width: 0,
              marginRight: 0
            }}
            transition={{
              width: { duration: 0.3, ease: 'easeInOut' },
              marginRight: { duration: 0.5, ease: 'easeOut' }
            }}
          >
            {languages.map((option) => {
              const optionClassName =
                language === option
                  ? `${s.option} ${s.selected}`
                  : `${s.option}`

              const title = t('Selecionar o idioma')

              return (
                <button
                  key={option}
                  className={optionClassName}
                  type='button'
                  title={`${title} ${option}`}
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
        type='button'
        title={
          isLanguageMenuOpen
            ? t('Fechar o menu de idiomas')
            : t('Abrir o menu de idiomas')
        }
        onClick={() => setIsLanguageMenuOpen((current) => !current)}
      >
        {languageIcon(s.icon)}
      </button>

      {renderOptions()}
    </div>
  )
}
