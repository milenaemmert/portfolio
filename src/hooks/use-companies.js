import { useTranslation } from '@hooks'
import {
  algarLogo,
  aluraLogo,
  ambevLogo,
  boticarioLogo,
  globoLogo,
  suzanoLogo,
  zenviaLogo
} from '@icons'

export const useCompanies = () => {
  const { t } = useTranslation()

  return [
    {
      logo: boticarioLogo,
      link: 'https://www.boticario.com.br',
      title: t('Acessar o site do Boticário')
    },
    {
      logo: aluraLogo,
      link: 'https://www.alura.com.br',
      title: t('Acessar o site da Alura')
    },
    {
      logo: ambevLogo,
      link: 'https://www.ambev.com.br',
      title: t('Acessar o site da Ambev')
    },
    {
      logo: suzanoLogo,
      link: 'https://www.suzano.com.br',
      title: t('Acessar o site da Suzano')
    },
    {
      logo: globoLogo,
      link: 'https://www.globo.com',
      title: t('Acessar o site da Globo')
    },
    {
      logo: zenviaLogo,
      link: 'https://www.zenvia.com',
      title: t('Acessar o site da Zenvia')
    },
    {
      logo: algarLogo,
      link: 'https://www.algar.com.br',
      title: t('Acessar o site da Algar')
    }
  ]
}
