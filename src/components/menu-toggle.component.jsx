import { burgerIcon, closeIcon } from '../assets/icons'
import { useTranslation, useHeader } from '../hooks'
import s from './menu-toggle.module.css'

export const MenuToggle = () => {
  const { t } = useTranslation()
  const { isMenuOpen, toggleMenu } = useHeader()

  return (
    <button
      className={s.menuToggle}
      type='button'
      title={
        isMenuOpen ? t('Fechar o menu principal') : t('Abrir o menu principal')
      }
      onClick={() => toggleMenu()}
    >
      {isMenuOpen ? closeIcon(s.icon) : burgerIcon(s.icon)}
    </button>
  )
}
