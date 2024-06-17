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
              aria-label={title}
              className={s.social}
              href={link}
              rel='noreferrer'
              target='_blank'
              title={title}
            >
              {icon(s.icon)}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
