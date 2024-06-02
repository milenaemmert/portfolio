import { Pill } from '.'
import s from './knowledge-card.module.css'

export const KnowledgeCard = ({ icon, title, description, knowledges }) => {
  return (
    <li className={s.knowledgeCard}>
      <div className={s.iconWrapper}>{icon(s.icon)}</div>

      <h4 className={s.title}>{title}</h4>

      <p className={s.description}>{description}</p>

      <ul className={s.pills}>
        {knowledges.map(({ name, link }) => (
          <Pill key={name} name={name} link={link} />
        ))}
      </ul>
    </li>
  )
}
