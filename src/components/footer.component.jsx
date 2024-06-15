import { useTranslation, useBreakpoint } from '@hooks'
import s from './footer.module.css'

export const Footer = () => {
  const { t } = useTranslation()
  const { isMobile } = useBreakpoint()

  function renderContent() {
    const year = t('© 2024')
    const developer = t('Design e desenvolvimento por Milena Emmert')
    const copyright = t('Todos os direitos reservados.')

    if (isMobile) {
      return (
        <>
          <span>{year}</span>
          <span>{developer}</span>
          <span>{copyright}</span>
        </>
      )
    }

    return `${year} | ${developer} | ${copyright}`
  }

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <p className={s.content}>{renderContent()}</p>
      </div>
    </footer>
  )
}
