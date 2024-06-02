import { CONTACT_ANCHOR } from '../../constants'
import { useTranslation } from '../../hooks'
import { Logo, Social } from '../../components'
import s from './main-contact.module.css'

export const MainContactSection = () => {
  const { t } = useTranslation()

  return (
    <section id={CONTACT_ANCHOR} className={s.mainContactSection}>
      <div className={s.container}>
        <div className={s.social}>
          <Logo />

          <p className={s.socialTip}>
            {t(
              'Acesse o LinkedIn para ver minhas experiências e certificados!'
            )}
          </p>

          <Social />
        </div>

        <div className={s.contact}>
          <h3 className={s.contactTitle}>{t('Vamos conversar?')}</h3>

          <div className={s.contactList}>
            <span className={s.contactItem}>{t('+55 51 98313-0810')}</span>

            <span className={s.contactItem}>
              {t('milena.emmert@outlook.com')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
