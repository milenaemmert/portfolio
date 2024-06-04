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
            <a
              className={s.contactLink}
              title={t('Me chamar no WhatsApp')}
              href='https://wa.me/5551983130810'
              rel='noopener'
              target='_blank'
            >
              {t('+55 51 98313-0810')}
            </a>

            <a
              className={s.contactLink}
              title={t('Me enviar um email')}
              href='mailto:milena.emmert@outlook.com'
              rel='noopener'
              target='_blank'
            >
              {t('milena.emmert@outlook.com')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
