import { miLogo } from '../assets/icons'
import { useTranslation, useHeader } from '../hooks'
import s from './logo.module.css'

export const Logo = () => {
  const { t } = useTranslation()
  const { closeMenu } = useHeader()

  return (
    <a
      className={s.link}
      title={t('Ir para o início')}
      href='#'
      onClick={() => closeMenu()}
    >
      {miLogo(s.logo)}
    </a>
  )
}
