import { COLLABORATION_ANCHOR } from '@constants'
import { useCompanies, useTranslation } from '@hooks'

import s from './main-collaboration.module.css'

export const MainCollaborationSection = () => {
  const { t } = useTranslation()
  const companies = useCompanies()

  return (
    <section className={s.mainCollaborationSection} id={COLLABORATION_ANCHOR}>
      <div className={s.container}>
        <h3 className={s.title}>{t('Colaboração')}</h3>

        <p className={s.description}>
          {t(
            'Tive a oportunidade de ministrar palestras e treinamentos para as seguintes empresas:'
          )}
        </p>

        <ul className={s.companies}>
          {companies.map(({ logo, link, title }) => (
            <li key={title}>
              <a
                aria-label={title}
                className={s.companyLink}
                href={link}
                rel='noreferrer'
                target='_blank'
                title={title}
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
