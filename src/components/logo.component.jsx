import { miLogo } from '@assets/icons'
import { useTranslation, useHeader } from '@hooks'
import s from './logo.module.css'

export const Logo = () => {
  const { t } = useTranslation()
  const { closeMenu } = useHeader()

  const title = t('Ir para o início')

  return (
    <a
      className={s.link}
      title={title}
      aria-label={title}
      href='#'
      onClick={() => closeMenu()}
    >
      {miLogo(s.logo)}
    </a>
  )
}
