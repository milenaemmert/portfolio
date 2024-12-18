import detailLeftFallback from '@images/main-about/detail-left.png'
import detailLeft from '@images/main-about/detail-left.webp'
import detailRightFallback from '@images/main-about/detail-right.png'
import detailRight from '@images/main-about/detail-right.webp'
import miFallback from '@images/main-about/mi.png'
import mi from '@images/main-about/mi.webp'

import { Image } from '@components'
import { ABOUT_ANCHOR } from '@constants'
import { useTranslation } from '@hooks'

import s from './main-about.module.css'

export const MainAboutSection = () => {
  const { t } = useTranslation()

  return (
    <section className={s.mainAboutSection} id={ABOUT_ANCHOR}>
      <div className={s.container}>
        <Image
          className={s.detailLeft}
          fallback={detailLeftFallback}
          height='224'
          src={detailLeft}
          width='224'
        />

        <Image
          className={s.detailRight}
          fallback={detailRightFallback}
          height='68'
          src={detailRight}
          width='68'
        />

        <div className={s.headings}>
          <h1 className={s.title}>{t('Milena Emmert')}</h1>

          <h2 className={s.subtitle}>{t('Dev & Analista de Dados')}</h2>
        </div>

        <p className={s.description}>
          {t(
            'Sou analista de dados, instrutora, tenho experiência como dev front-end e conhecimento em design. Essas habilidades permitem que eu colabore de forma analítica e criativa na solução de problemas, fundamentando meu trabalho na análise de dados e experiência do usuário.'
          )}
        </p>

        <Image
          alt={t(
            'Foto da Milena Emmert, que é instrutora de programação, desenvolvedora e analista de dados. Ela possui cabelo loiro, está usando uma boina bege e um cachecol bordô.'
          )}
          className={s.photo}
          fallback={miFallback}
          height='360'
          src={mi}
          width='400'
        />
      </div>
    </section>
  )
}
