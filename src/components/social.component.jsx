import { useSocial } from '../hooks'
import s from './social.module.css'

export const Social = () => {
  const social = useSocial()

  return (
    <ul className={s.list}>
      {social.map(({ icon, link, title }) => {
        return (
          <li key={title} className={s.social}>
            <a
              className={s.link}
              title={title}
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
