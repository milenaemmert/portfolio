import { useEffect, useState } from 'react'

const BREAKPOINT = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP'
}

const BREAKPOINT_SIZE = {
  MOBILE: 768,
  TABLET: 1024
}

export const useBreakpoint = () => {
  const getBreakpoint = () => {
    const currentWidth = window.innerWidth

    if (currentWidth <= BREAKPOINT_SIZE.MOBILE) {
      return BREAKPOINT.MOBILE
    } else if (currentWidth <= BREAKPOINT_SIZE.TABLET) {
      return BREAKPOINT.TABLET
    } else {
      return BREAKPOINT.DESKTOP
    }
  }

  const [breakpoint, setBreakpoint] = useState(getBreakpoint())

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isMobile: breakpoint === BREAKPOINT.MOBILE,
    isTablet: breakpoint === BREAKPOINT.TABLET,
    isDesktop: breakpoint === BREAKPOINT.DESKTOP
  }
}
