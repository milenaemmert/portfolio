import { miLogo } from '../assets/icons'
import s from './logo.module.css'

export const Logo = () => {
  return (
    <a className={s.link} href='#'>
      {miLogo(s.logo)}
    </a>
  )
}
