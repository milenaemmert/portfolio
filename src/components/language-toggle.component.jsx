import { useState } from 'react'
import { languageIcon } from '../assets/icons'
import { LANGUAGES } from '../constants'
import { useTranslation } from '../hooks'
import s from './language-toggle.module.css'

export const LanguageToggle = () => {
  const [isLanguageToggleOpen, setIsLanguageToggleOpen] = useState(false)
  const { language, setLanguage, t } = useTranslation()

  function renderOptions() {
    if (!isLanguageToggleOpen) return

    const languages = Object.values(LANGUAGES)

    const optionClassName = (option) =>
      language === option ? `${s.option} ${s.selected}` : `${s.option}`

    return (
      <div className={s.options}>
        {languages.map((option) => {
          const title = t('Selecionar idioma')

          return (
            <button
              key={option}
              className={optionClassName(option)}
              type='button'
              title={`${title} ${option}`}
              onClick={() => setLanguage(option)}
            >
              {option}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className={s.languageToggle}>
      <button
        type='button'
        title={
          isLanguageToggleOpen
            ? t('Fechar menu de idiomas')
            : t('Abrir menu de idiomas')
        }
        onClick={() => setIsLanguageToggleOpen((current) => !current)}
      >
        {languageIcon(s.icon)}
      </button>

      {renderOptions()}
    </div>
  )
}
