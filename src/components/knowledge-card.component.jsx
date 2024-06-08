import PropTypes from 'prop-types'
import s from './knowledge-card.module.css'

export const KnowledgeCard = ({ icon, title, description, knowledges }) => {
  return (
    <li className={s.knowledgeCard}>
      <div className={s.iconWrapper}>{icon(s.icon)}</div>

      <h4 className={s.title}>{title}</h4>

      <p className={s.description}>{description}</p>

      <ul className={s.pills}>
        {knowledges.map(({ name, link }) => (
          <li key={name}>
            <a
              className={s.pill}
              title={name}
              href={link}
              rel='noopener'
              target='_blank'
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

KnowledgeCard.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  knowledges: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
}
