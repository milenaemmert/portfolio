import { Social } from '@components'
import { useHeader, useNav } from '@hooks'

import s from './menu.module.css'

export const Menu = () => {
  const { navLink, selectNavLink } = useHeader()
  const links = useNav()

  return (
    <div className={s.menu}>
      <div className={s.container}>
        <nav>
          <ul className={s.navList}>
            {links.map(({ id, name, anchor, title }) => {
              const navLinkClassName =
                navLink === id ? `${s.navLink} ${s.isNavLinkActive}` : s.navLink

              return (
                <li key={id}>
                  <a
                    className={navLinkClassName}
                    href={anchor}
                    title={title}
                    onClick={() => selectNavLink(id)}
                  >
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>
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
