import { createContext, useState, useEffect } from 'react'
import { useBreakpoint, useScrollLock, useNav } from '../hooks'

export const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
  const links = useNav()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navLink, setNavLink] = useState(links[0].id)
  const { isDesktop } = useBreakpoint()
  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    closeMenu()
  }, [isDesktop])

  function openMenu() {
    if (isMenuOpen) return

    setIsMenuOpen(true)
    lockScroll()
  }

  function closeMenu() {
    if (!isMenuOpen) return

    setIsMenuOpen(false)
    unlockScroll()
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
