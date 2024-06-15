import {
  behanceIcon,
  youtubeIcon,
  githubIcon,
  linkedinIcon,
  devIcon,
  notionIcon
} from '@assets/icons'
import { useTranslation } from '@hooks'

export const useSocial = () => {
  const { t } = useTranslation()

  return [
    {
      icon: behanceIcon,
      link: 'https://www.behance.net/milenaemmert',
      title: t('Acessar o meu Behance')
    },
    {
      icon: youtubeIcon,
      link: 'https://www.youtube.com/@milenaemmert',
      title: t('Acessar o meu canal no YouTube')
    },
    {
      icon: githubIcon,
      link: 'https://github.com/milenaemmert',
      title: t('Acessar o meu GitHub')
    },
    {
      icon: linkedinIcon,
      link: 'https://www.linkedin.com/in/milenaemmert',
      title: t('Acessar o meu LinkedIn')
    },
    {
      icon: devIcon,
      link: 'https://dev.to/milenaemmert',
      title: t('Acessar o meu perfil na comunidade DEV')
    },
    {
      icon: notionIcon,
      link: 'https://milenaemmert.notion.site/Meu-Notion-Tri-Bagual-faf1f8a1890a4ed1bc65a26b85704b8b',
      title: t('Acessar o meu Notion')
    }
  ]
}
