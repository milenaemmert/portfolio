import PropTypes from 'prop-types'
import { chevronIcon } from '../assets/icons'
import { useTranslation } from '../hooks'
import { Image } from '../components'
import s from './project-card.module.css'

export const ProjectCard = ({ thumbnail, title, description, link }) => {
  const { t } = useTranslation()

  const linkTitle = t('Ver projeto')

  return (
    <li className={s.projectCard}>
      <div className={s.thumbnailWrapper}>
        <Image
          className={s.thumbnail}
          src={thumbnail.src}
          fallback={thumbnail.fallback}
          alt={thumbnail.alt}
          width='420'
          height='280'
          isLazy
        />
      </div>

      <h4 className={s.title}>{title}</h4>

      <p className={s.description}>{description}</p>

      <a
        className={s.link}
        title={linkTitle}
        href={link}
        rel='noopener'
        target='_blank'
      >
        {chevronIcon(s.icon)}
        {linkTitle}
      </a>
    </li>
  )
}

ProjectCard.propTypes = {
  thumbnail: PropTypes.shape({
    src: PropTypes.string.isRequired,
    fallback: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
