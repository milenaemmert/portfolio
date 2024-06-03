import { COLLABORATION_ANCHOR } from '../../constants'
import { useTranslation, useCompanies } from '../../hooks'
import s from './main-collaboration.module.css'

export const MainCollaborationSection = () => {
  const { t } = useTranslation()
  const companies = useCompanies()

  return (
    <section id={COLLABORATION_ANCHOR} className={s.mainCollaborationSection}>
      <div className={s.container}>
        <h3 className={s.title}>{t('Colaboração')}</h3>

        <p className={s.description}>
          {t(
            'Tive a oportunidade de ministrar palestras e treinamentos para as seguintes empresas:'
          )}
        </p>

        <ul className={s.companies}>
          {companies.map(({ logo, link, title }) => (
            <li key={title} className={s.company}>
              <a
                className={s.companyLink}
                title={title}
                href={link}
                rel='noopener'
                target='_blank'
              >
                {logo(s.companyLogo)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
