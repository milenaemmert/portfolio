import { useHeader } from '../hooks'
import { Logo, LanguageToggle, MenuToggle, Menu } from '.'
import s from './header.module.css'

export const Header = () => {
  const { isMenuOpen } = useHeader()

  const headerClassName = isMenuOpen ? `${s.header} ${s.isMenuOpen}` : s.header

  return (
    <header className={headerClassName}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Logo />

          <div className={s.controls}>
            <LanguageToggle />

            <MenuToggle />
          </div>
        </div>
      </div>

      {isMenuOpen && <Menu />}
    </header>
  )
}
