import { useTranslation } from '../hooks'
import s from './project-card.module.css'

export const ProjectCard = ({ thumbnail, title, description, link }) => {
  const { t } = useTranslation()

  return (
    <li className={s.knowledgeCard}>
      <img className={s.thumbnail} src={thumbnail} alt='' />

      <h4 className={s.title}>{title}</h4>

      <p className={s.description}>{description}</p>

      <a className={s.link} href={link} rel='noopener' target='_blank'>
        {t('Ver projeto')}
      </a>
    </li>
  )
}
