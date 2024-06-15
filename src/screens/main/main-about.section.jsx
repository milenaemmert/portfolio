import detailLeft from '@assets/images/main-about/detail-left.webp'
import detailLeftFallback from '@assets/images/main-about/detail-left.png'
import detailRight from '@assets/images/main-about/detail-right.webp'
import detailRightFallback from '@assets/images/main-about/detail-right.png'
import mi from '@assets/images/main-about/mi.webp'
import miFallback from '@assets/images/main-about/mi.png'
import { ABOUT_ANCHOR } from '@constants'
import { useTranslation } from '@hooks'
import { Image } from '@components'
import s from './main-about.module.css'

export const MainAboutSection = () => {
  const { t } = useTranslation()

  return (
    <section id={ABOUT_ANCHOR} className={s.mainAboutSection}>
      <div className={s.container}>
        <Image
          className={s.detailLeft}
          src={detailLeft}
          fallback={detailLeftFallback}
          width='224'
          height='224'
        />

        <Image
          className={s.detailRight}
          src={detailRight}
          fallback={detailRightFallback}
          width='68'
          height='68'
        />

        <div className={s.headings}>
          <h1 className={s.title}>{t('Milena Emmert')}</h1>

          <h2 className={s.subtitle}>{t('Dev & Designer')}</h2>
        </div>

        <p className={s.description}>
          {t(
            'Sou instrutora de programação com experiência em desenvolvimento front-end e design. Colaboro de forma construtiva e criativa na solução de problemas, fundamentando meu trabalho na coleta e análise de dados e na experiência dos usuários.'
          )}
        </p>

        <Image
          className={s.photo}
          src={mi}
          fallback={miFallback}
          alt={t(
            'Foto da Milena Emmert, que é instrutora de programação, desenvolvedora e designer. Ela possui cabelo loiro, está usando uma boina bege e um cachecol bordô.'
          )}
          width='400'
          height='360'
        />
      </div>
    </section>
  )
}
