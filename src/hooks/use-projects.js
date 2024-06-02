import { useTranslation } from '.'

export const useProjects = () => {
  const { t } = useTranslation()

  return [
    {
      thumbnail: '',
      title: t('Projeto 1'),
      description: t('Descrição do projeto 1'),
      link: ''
    },
    {
      thumbnail: '',
      title: t('Projeto 2'),
      description: t('Descrição do projeto 2'),
      link: ''
    },
    {
      thumbnail: '',
      title: t('Projeto 3'),
      description: t('Descrição do projeto 3'),
      link: ''
    },
    {
      thumbnail: '',
      title: t('Projeto 4'),
      description: t('Descrição do projeto 4'),
      link: ''
    }
  ]
}
