import { burgerIcon, closeIcon } from '../assets/icons'
import { useTranslation, useHeader } from '../hooks'
import s from './menu-toggle.module.css'

export const MenuToggle = () => {
  const { t } = useTranslation()
  const { isMenuOpen, setIsMenuOpen } = useHeader()

  return (
    <button
      className={s.menuToggle}
      type='button'
      title={isMenuOpen ? t('Fechar menu') : t('Abrir menu')}
      onClick={() => setIsMenuOpen((current) => !current)}
    >
      {isMenuOpen ? closeIcon(s.icon) : burgerIcon(s.icon)}
    </button>
  )
}
