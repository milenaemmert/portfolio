import { createContext, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useBreakpoint, useScrollLock, useNav } from '../hooks'

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
    closeMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop])

  function openMenu() {
    if (isMenuOpen) return

    setIsMenuOpen(true)
    lockScroll()
  }

  function toggleMenu() {
    isMenuOpen ? closeMenu() : openMenu()
  }

  function selectNavLink(id) {
    closeMenu()
    setNavLink(id)
  }

  return (
    <HeaderContext.Provider
      value={{
        isMenuOpen,
        navLink,
        closeMenu,
        toggleMenu,
        selectNavLink
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired
}
