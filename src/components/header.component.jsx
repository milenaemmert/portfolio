import FocusTrap from 'focus-trap-react'
import { motion, AnimatePresence } from 'framer-motion'
import { chevronIcon } from '../assets/icons'
import { useHeader, useBreakpoint, useNav } from '../hooks'
import { Logo, LanguageMenu, MenuToggle, Menu } from '.'
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
                  <AnimatePresence>
                    {navLink === id && (
                      <motion.div
                        initial={{ width: 0, marginRight: 0 }}
                        animate={{ width: 14, marginRight: 4 }}
                        exit={{ width: 0, marginRight: 0 }}
                        transition={{
                          width: { duration: 0.4, ease: 'easeInOut' },
                          marginRight: { duration: 0.8, ease: 'easeOut' }
                        }}
                      >
                        {chevronIcon(s.navLinkIcon)}
                      </motion.div>
                    )}
                  </AnimatePresence>

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

              <LanguageMenu />

              {!isDesktop && <MenuToggle />}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={s.menu}
              initial={{ opacity: 0, x: '-100%' }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: '-100%'
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </FocusTrap>
  )
}
