import FocusTrap from 'focus-trap-react'
import { useHeader, useBreakpoint, useNav } from '../hooks'
import { Logo, LanguageToggle, MenuToggle, Menu } from '.'
import s from './header.module.css'

export const Header = () => {
  const { isMenuOpen, navLink, selectNavLink } = useHeader()
  const { isDesktop } = useBreakpoint()
  const links = useNav()

  const headerClassName = isMenuOpen ? `${s.header} ${s.isMenuOpen}` : s.header

  function renderNav() {
    if (!isDesktop) return

    return (
      <nav className={s.nav}>
        <ul className={s.navList}>
          {links.map(({ id, name, anchor, title }) => {
            const navLinkClassName =
              navLink === id ? `${s.navLink} ${s.isNavLinkActive}` : s.navLink

            return (
              <li key={id} className={s.navItem}>
                <a
                  className={navLinkClassName}
                  title={title}
                  href={anchor}
                  onClick={() => selectNavLink(id)}
                >
                  {name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  return (
    <FocusTrap active={isMenuOpen}>
      <header className={headerClassName}>
        <div className={s.wrapper}>
          <div className={s.container}>
            <Logo />

            <div className={s.controls}>
              {renderNav()}

              <LanguageToggle />

              {!isDesktop && <MenuToggle />}
            </div>
          </div>
        </div>

        {isMenuOpen && <Menu />}
      </header>
    </FocusTrap>
  )
}
