import PropTypes from 'prop-types'

import s from './knowledge-card.module.css'

export const KnowledgeCard = ({ icon, title, description, knowledges }) => {
  return (
    <li className={s.knowledgeCard}>
      <div className={s.iconWrapper}>{icon(s.icon)}</div>

      <h3 className={s.title}>{title}</h3>

      <p className={s.description}>{description}</p>

      <ul className={s.pills}>
        {knowledges.map(({ name, link }) => (
          <li key={name}>
            <a
              className={s.pill}
              href={link}
              rel='noreferrer'
              target='_blank'
              title={name}
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
  description: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  knowledges: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string.isRequired
}
