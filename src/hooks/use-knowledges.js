import { designIcon, developmentIcon, dataAnalysisIcon } from '../assets/icons'
import { useTranslation } from '.'

export const useKnowledges = () => {
  const { t } = useTranslation()

  return [
    {
      icon: designIcon,
      title: t('Design'),
      description: t(
        'A criatividade faz parte da minha personalidade. Mas, para além do visual, meus projetos também costumam ser alinhados com as melhores práticas de UX.'
      ),
      list: [
        { name: 'UI/UX', link: '' },
        { name: 'Web', link: 'https://pt.wikipedia.org/wiki/Web_design' },
        { name: 'GIMP', link: 'https://www.gimp.org' },
        { name: 'Canva', link: 'https://www.canva.com/pt_br' },
        {
          name: 'Illustrator',
          link: 'https://www.adobe.com/br/products/illustrator.html'
        },
        { name: 'Figma', link: 'https://www.figma.com' }
      ]
    },
    {
      icon: developmentIcon,
      title: t('Programação'),
      description: t(
        'Foi a minha porta de entrada na tecnologia. Todo projeto que crio, seja para design ou dados, penso de forma alinhada com os meus aprendizados de desenvolvimento.'
      ),
      list: [
        {
          name: 'HTML',
          link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
        },
        {
          name: 'CSS',
          link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
        },
        { name: 'Typescript', link: 'https://www.typescriptlang.org' },
        { name: 'React', link: 'https://react.dev' },
        { name: 'Git', link: 'https://git-scm.com' }
      ]
    },
    {
      icon: dataAnalysisIcon,
      title: t('Análise de Dados'),
      description: t(
        'Os dados nos guiam e nos levam a lugares impensáveis. Por isso, as decisões que tomo em meu trabalho partem da coleta, análise e tratamento de dados.'
      ),
      list: [
        { name: 'MySQL', link: 'https://www.mysql.com' },
        {
          name: 'Excel',
          link: 'https://www.microsoft.com/pt-br/microsoft-365/excel'
        },
        { name: 'Apps Script', link: 'https://www.google.com/script/start' },
        {
          name: 'Power BI',
          link: 'https://www.microsoft.com/pt-br/power-platform/products/power-bi'
        },
        { name: 'Python', link: 'https://www.python.org' }
      ]
    }
  ]
}
