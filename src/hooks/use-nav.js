import {
  ABOUT_ANCHOR,
  KNOWLEDGE_ANCHOR,
  PROJECTS_ANCHOR,
  COLLABORATION_ANCHOR,
  CONTACT_ANCHOR
} from '../constants'
import { useTranslation } from '.'

export const useNav = () => {
  const { t } = useTranslation()

  return [
    {
      name: t('Sobre'),
      anchor: `#${ABOUT_ANCHOR}`,
      title: t('Ir para a sessão "Sobre"')
    },
    {
      name: t('Conhecimento'),
      anchor: `#${KNOWLEDGE_ANCHOR}`,
      title: t('Ir para a sessão "Conhecimento"')
    },
    {
      name: t('Projetos'),
      anchor: `#${PROJECTS_ANCHOR}`,
      title: t('Ir para a sessão "Projetos"')
    },
    {
      name: t('Colaboração'),
      anchor: `#${COLLABORATION_ANCHOR}`,
      title: t('Ir para a sessão "Colaboração"')
    },
    {
      name: t('Contato'),
      anchor: `#${CONTACT_ANCHOR}`,
      title: t('Ir para a sessão "Contato"')
    }
  ]
}
