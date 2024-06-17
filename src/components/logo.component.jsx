import { useHeader, useTranslation } from '@hooks'
import { miLogo } from '@icons'

import s from './logo.module.css'

export const Logo = () => {
  const { t } = useTranslation()
  const { closeMenu } = useHeader()

  const title = t('Ir para o início')

  return (
    <a
      aria-label={title}
      className={s.link}
      href='#'
      title={title}
      onClick={() => closeMenu()}
    >
      {miLogo(s.logo)}
    </a>
  )
}
