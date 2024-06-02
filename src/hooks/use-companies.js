import {
  boticarioLogo,
  aluraLogo,
  ambevLogo,
  suzanoLogo,
  globoLogo,
  zenviaLogo,
  algarLogo
} from '../assets/icons'
import { useTranslation } from '.'

export const useCompanies = () => {
  const { t } = useTranslation()

  return [
    {
      logo: boticarioLogo,
      link: 'https://www.boticario.com.br',
      title: t('Acessar o site oficial do Boticário')
    },
    {
      logo: aluraLogo,
      link: 'https://www.alura.com.br',
      title: t('Acessar o site oficial da Alura')
    },
    {
      logo: ambevLogo,
      link: 'https://www.ambev.com.br',
      title: t('Acessar o site oficial da Ambev')
    },
    {
      logo: suzanoLogo,
      link: 'https://www.suzano.com.br',
      title: t('Acessar o site oficial da Suzano')
    },
    {
      logo: globoLogo,
      link: 'https://www.globo.com',
      title: t('Acessar o site oficial da Globo')
    },
    {
      logo: zenviaLogo,
      link: 'https://www.zenvia.com',
      title: t('Acessar o site oficial da Zenvia')
    },
    {
      logo: algarLogo,
      link: 'https://www.algar.com.br',
      title: t('Acessar o site oficial da Algar')
    }
  ]
}
