import { useSocial } from '@hooks'
import s from './social.module.css'

export const Social = () => {
  const social = useSocial()

  return (
    <ul className={s.list}>
      {social.map(({ icon, link, title }) => {
        return (
          <li key={title}>
            <a
              className={s.social}
              title={title}
              aria-label={title}
              href={link}
              rel='noopener'
              target='_blank'
            >
              {icon(s.icon)}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
