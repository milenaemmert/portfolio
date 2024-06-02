import { PROJECTS_ANCHOR } from '../../constants'
import { useTranslation, useProjects } from '../../hooks'
import { ProjectCard } from '../../components'
import s from './main-projects.module.css'

export const MainProjectsSection = () => {
  const { t } = useTranslation()
  const projects = useProjects()

  return (
    <section id={PROJECTS_ANCHOR} className={s.mainProjectsSection}>
      <div className={s.container}>
        <h3 className={s.title}>{t('Projetos')}</h3>

        <ul className={s.projects}>
          {projects.map(({ thumbnail, title, description, link }) => (
            <ProjectCard
              key={title}
              thumbnail={thumbnail}
              title={title}
              description={description}
              link={link}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
