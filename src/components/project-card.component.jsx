import PropTypes from 'prop-types'

import { Image } from '@components'
import { useTranslation } from '@hooks'
import { chevronIcon } from '@icons'

import s from './project-card.module.css'

export const ProjectCard = ({ thumbnail, title, description, link }) => {
  const { t } = useTranslation()

  const linkTitle = t('Ver projeto')

  return (
    <li className={s.projectCard}>
      <div className={s.thumbnailWrapper}>
        <Image
          isLazy
          alt={thumbnail.alt}
          className={s.thumbnail}
          fallback={thumbnail.fallback}
          height='280'
          src={thumbnail.src}
          width='420'
        />
      </div>

      <h4 className={s.title}>{title}</h4>

      <p className={s.description}>{description}</p>

      <a
        className={s.link}
        href={link}
        rel='noreferrer'
        target='_blank'
        title={linkTitle}
      >
        {chevronIcon(s.icon)}
        {linkTitle}
      </a>
    </li>
  )
}

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    fallback: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
}
