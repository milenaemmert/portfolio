import PropTypes from 'prop-types'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { useBreakpoint, useNav, useScrollLock } from '@hooks'

export const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
  const links = useNav()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navLink, setNavLink] = useState(links[0].id)
  const { isDesktop } = useBreakpoint()
  const { lockScroll, unlockScroll } = useScrollLock()

  const closeMenu = useCallback(() => {
    if (!isMenuOpen) return

    setIsMenuOpen(false)
    unlockScroll()
  }, [isMenuOpen, unlockScroll])

  useEffect(() => {
    if (!isDesktop) return

    closeMenu()
  }, [isDesktop, closeMenu])

  const openMenu = useCallback(() => {
    if (isMenuOpen) return

    setIsMenuOpen(true)
    lockScroll()
  }, [isMenuOpen, lockScroll])

  const toggleMenu = useCallback(() => {
    isMenuOpen ? closeMenu() : openMenu()
  }, [isMenuOpen, openMenu, closeMenu])

  const selectNavLink = useCallback(
    (id) => {
      closeMenu()
      setNavLink(id)
    },
    [closeMenu]
  )

  const value = useMemo(
    () => ({
      isMenuOpen,
      navLink,
      closeMenu,
      toggleMenu,
      selectNavLink
    }),
    [isMenuOpen, navLink, closeMenu, toggleMenu, selectNavLink]
  )

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  )
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired
}
