import { useTranslation } from '@hooks'
import { dataAnalysisIcon, designIcon, developmentIcon } from '@icons'

export const useKnowledges = () => {
  const { t } = useTranslation()

  return [  
    {
      icon: developmentIcon,
      title: t('Programação'),
      description: t(
        'Foi a minha porta de entrada na tecnologia. Todo projeto que crio, seja para design ou dados, penso de forma alinhada com os meus aprendizados de desenvolvimento.'
      ),
      list: [
        {
          name: t('HTML'),
          link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
        },
        {
          name: t('CSS'),
          link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
        },
        {
          name: t('JavaScript'),
          link: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
        },
        { name: t('TypeScript'), link: 'https://www.typescriptlang.org' },
        { name: t('React'), link: 'https://react.dev' },
        { name: t('Git'), link: 'https://git-scm.com' }
      ]
    },
    {
      icon: dataAnalysisIcon,
      title: t('Análise de Dados'),
      description: t(
        'Os dados nos guiam. Por isso as decisões que tomo partem da coleta, análise, tratamento e compartilhamento de dados, seguindo o processo de ETL.'
      ),
      list: [
        { name: t('MySQL'), link: 'https://www.mysql.com' },
        {
          name: t('Excel'),
          link: 'https://www.microsoft.com/pt-br/microsoft-365/excel'
        },
        { name: t('Python'), link: 'https://www.python.org' },
        { name: t('Apps Script'), link: 'https://www.google.com/script/start' },
        {
          name: t('Power BI'),
          link: 'https://www.microsoft.com/pt-br/power-platform/products/power-bi'
        }
      ]
    },
    {
      icon: designIcon,
      title: t('Design'),
      description: t(
        'A criatividade faz parte da minha personalidade. Mas, para além do visual, meus projetos também são alinhados com as melhores práticas de UX.'
      ),
      list: [
        {
          name: t('UI/UX'),
          link: 'https://dev.to/milenaemmert/ate-os-ventos-te-sopram-experiencias-c9l'
        },
        { name: t('Web'), link: 'https://pt.wikipedia.org/wiki/Web_design' },
        { name: t('GIMP'), link: 'https://www.gimp.org' },
        { name: t('Canva'), link: 'https://www.canva.com/pt_br' },
        {
          name: t('Illustrator'),
          link: 'https://www.adobe.com/br/products/illustrator.html'
        },
        { name: t('Figma'), link: 'https://www.figma.com' }
      ]
    }
  ]
}
