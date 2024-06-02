import { createContext, useState } from 'react'
import { ABOUT_ANCHOR } from '../constants'

export const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
  const [currentMenuLink, setCurrentMenuLink] = useState()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderContext.Provider
      value={{
        currentMenuLink,
        isMenuOpen,
        setCurrentMenuLink,
        setIsMenuOpen
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}
