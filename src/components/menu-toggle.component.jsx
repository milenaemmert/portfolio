import { burgerIcon, closeIcon } from '@assets/icons'
import { useTranslation, useHeader } from '@hooks'
import s from './menu-toggle.module.css'

export const MenuToggle = () => {
  const { t } = useTranslation()
  const { isMenuOpen, toggleMenu } = useHeader()

  const title = isMenuOpen
    ? t('Fechar o menu principal')
    : t('Abrir o menu principal')

  return (
    <button
      className={s.menuToggle}
      type='button'
      title={title}
      aria-label={title}
      onClick={() => toggleMenu()}
    >
      {isMenuOpen ? closeIcon(s.icon) : burgerIcon(s.icon)}
    </button>
  )
}
