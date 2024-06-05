import { chevronIcon } from '../assets/icons'
import { useTranslation } from '../hooks'
import s from './project-card.module.css'

export const ProjectCard = ({ thumbnail, title, description, link }) => {
  const { t } = useTranslation()

  return (
    <li className={s.projectCard}>
      <div className={s.thumbnailWrapper}>
        <img className={s.thumbnail} src={thumbnail.src} alt={thumbnail.alt} />
      </div>

      <h4 className={s.title}>{title}</h4>

      <p className={s.description}>{description}</p>

      <a
        className={s.link}
        title={t('Ver projeto')}
        href={link}
        rel='noopener'
        target='_blank'
      >
        {chevronIcon(s.icon)}
        {t('Ver projeto')}
      </a>
    </li>
  )
}
