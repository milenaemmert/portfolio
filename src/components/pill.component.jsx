import s from './pill.module.css'

export const Pill = ({ name, link }) => {
  return (
    <li className={s.pill}>
      <a
        className={s.link}
        title={name}
        href={link}
        rel='noopener'
        target='_blank'
      >
        {name}
      </a>
    </li>
  )
}
