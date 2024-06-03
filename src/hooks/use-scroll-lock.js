export const useScrollLock = () => {
  function lockScroll() {
    document.body.style.overflow = 'hidden'
  }

  function unlockScroll() {
    document.body.style.overflow = 'initial'
  }

  return { lockScroll, unlockScroll }
}
