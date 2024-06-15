import { useProjects, useTranslation } from '@hooks'
import { PROJECTS_ANCHOR } from '@constants'
import { ProjectCard } from '@components'
import s from './main-projects.module.css'

export const MainProjectsSection = () => {
  const { t } = useTranslation()
  const projects = useProjects()

  return (
    <section className={s.mainProjectsSection} id={PROJECTS_ANCHOR}>
      <div className={s.container}>
        <h3 className={s.title}>{t('Projetos')}</h3>

        <ul className={s.projects}>
          {projects.map(({ thumbnail, title, description, link }) => (
            <ProjectCard
              description={description}
              key={title}
              link={link}
              thumbnail={thumbnail}
              title={title}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
