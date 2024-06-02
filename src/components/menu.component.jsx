import { useNav } from '../hooks'
import { Social } from '.'
import s from './menu.module.css'

export const Menu = () => {
  const links = useNav()

  return (
    <div className={s.menu}>
      <div className={s.container}>
        <nav className={s.nav}>
          {links.map(({ name, anchor, title }) => (
            <a key={name} title={title} href={anchor}>
              {name}
            </a>
          ))}
        </nav>
      </div>

      <div className={s.social}>
        <div className={s.container}>
          <Social />
        </div>
      </div>
    </div>
  )
}
