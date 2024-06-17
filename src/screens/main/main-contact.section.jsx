import { Logo, Social } from '@components'
import { CONTACT_ANCHOR } from '@constants'
import { useTranslation } from '@hooks'

import s from './main-contact.module.css'

export const MainContactSection = () => {
  const { t } = useTranslation()

  return (
    <section className={s.mainContactSection} id={CONTACT_ANCHOR}>
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
              href='https://wa.me/5551983130810'
              rel='noreferrer'
              target='_blank'
              title={t('Chamar no WhatsApp')}
            >
              {t('+55 51 98313-0810')}
            </a>

            <a
              className={s.contactLink}
              href='mailto:milena.emmert@outlook.com'
              rel='noreferrer'
              target='_blank'
              title={t('Enviar um email')}
            >
              {t('milena.emmert@outlook.com')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
