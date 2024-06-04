import projectIcoThumbnail from '../assets/images/main-projects/project-ico-thumbnail.png'
import projectHackatonThumbnail from '../assets/images/main-projects/project-hackaton-thumbnail.png'
import projectHighlightThumbnail from '../assets/images/main-projects/project-highlight-thumbnail.png'
import projectPrototypeThumbnail from '../assets/images/main-projects/project-prototype-thumbnail.png'
import { useTranslation } from '.'

export const useProjects = () => {
  const { t } = useTranslation()

  return [
    {
      thumbnail: projectIcoThumbnail,
      title: t('Projeto ICO'),
      description: t(
        'Se trata de uma plataforma de ícones visualmente atrativa, totalmente responsiva e com boas práticas de acessibilidade. Desenvolvida com HTML, CSS e JavaScript vanilla.'
      ),
      link: 'https://ico-dun-seven.vercel.app'
    },
    {
      thumbnail: projectHackatonThumbnail,
      title: t('Hackathon UX/UI'),
      description: t(
        'Solução proposta durante um hackathon para um problema enfrentado por uma empresa de tecnologia. Foram utilizados conceitos de UX, UI e desenvolvimento front-end.'
      ),
      link: 'https://www.figma.com/board/ne9XFWNsYL3UWzNo3PnN7P/Hackathon-FCamara-2021'
    },
    {
      thumbnail: projectHighlightThumbnail,
      title: t('Editor Com Destaque de Sintaxe'),
      description: t(
        'Editor de código com destaque de sintaxe, desenvolvido com highlight.js. Também é possível salvar o código no local storage do navegador.'
      ),
      link: 'https://milenaemmert.github.io/alura-challenge-frontend/index.html'
    },
    {
      thumbnail: projectPrototypeThumbnail,
      title: t('Prototipação de UI e Design Gráfico'),
      description: t(
        'Protótipo de alta fidelidade com fluxos de navegação do usuário e exploração dos princípios de design gráfico e análises heurísticas.'
      ),
      link: 'https://www.figma.com/design/pTrubNaItW6ZUUTk8QmiLQ/Local-Imo-App'
    }
  ]
}
