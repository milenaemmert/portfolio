import { useHeader, useTranslation } from '@hooks'
import { burgerIcon, closeIcon } from '@icons'

import s from './menu-toggle.module.css'

export const MenuToggle = () => {
  const { t } = useTranslation()
  const { isMenuOpen, toggleMenu } = useHeader()

  const title = isMenuOpen
    ? t('Fechar o menu principal')
    : t('Abrir o menu principal')

  return (
    <button
      aria-label={title}
      className={s.menuToggle}
      title={title}
      type='button'
      onClick={() => toggleMenu()}
    >
      {isMenuOpen ? closeIcon(s.icon) : burgerIcon(s.icon)}
    </button>
  )
}
