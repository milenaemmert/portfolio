import aboutMi from '../../assets/images/about-mi.png'
import { ABOUT_ANCHOR } from '../../constants'
import { useTranslation } from '../../hooks'
import s from './main-about.module.css'

export const MainAboutSection = () => {
  const { t } = useTranslation()

  return (
    <section id={ABOUT_ANCHOR} className={s.mainAboutSection}>
      <div className={s.container}>
        <h2 className={s.subtitle}>{t('Dev & Designer')}</h2>

        <h1 className={s.title}>{t('Milena Emmert')}</h1>

        <p className={s.description}>
          {t(
            'Sou instrutora de programação com experiência em desenvolvimento front-end e design. Colaboro de forma construtiva e criativa na solução de problemas, fundamentando meu trabalho na coleta e análise de dados e na experiência dos usuários.'
          )}
        </p>

        <img alt='' className={s.photo} src={aboutMi} />
      </div>
    </section>
  )
}
