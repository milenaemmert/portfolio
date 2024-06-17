import projectHackatonThumbnailFallback from '@images/main-projects/project-hackaton-thumbnail.png'
import projectHackatonThumbnail from '@images/main-projects/project-hackaton-thumbnail.webp'
import projectHighlightThumbnailFallback from '@images/main-projects/project-highlight-thumbnail.png'
import projectHighlightThumbnail from '@images/main-projects/project-highlight-thumbnail.webp'
import projectIcoThumbnailFallback from '@images/main-projects/project-ico-thumbnail.png'
import projectIcoThumbnail from '@images/main-projects/project-ico-thumbnail.webp'
import projectPrototypeThumbnailFallback from '@images/main-projects/project-prototype-thumbnail.png'
import projectPrototypeThumbnail from '@images/main-projects/project-prototype-thumbnail.webp'

import { useTranslation } from '@hooks'

export const useProjects = () => {
  const { t } = useTranslation()

  return [
    {
      thumbnail: {
        src: projectIcoThumbnail,
        fallback: projectIcoThumbnailFallback,
        alt: t(
          'Miniatura mostrando a interface do Projeto ICO, que conta com vários controles para modificar a aparência dos ícones disponíveis na plataforma.'
        )
      },
      title: t('Projeto ICO'),
      description: t(
        'Se trata de uma plataforma de ícones visualmente atrativa, totalmente responsiva e com boas práticas de acessibilidade. Desenvolvida com HTML, CSS e JavaScript vanilla.'
      ),
      link: 'https://ico-dun-seven.vercel.app'
    },
    {
      thumbnail: {
        src: projectHackatonThumbnail,
        fallback: projectHackatonThumbnailFallback,
        alt: t('Miniatura mostrando o fluxo de UX criado durante um hackathon.')
      },
      title: t('Hackathon UX/UI'),
      description: t(
        'Solução proposta durante um hackathon para um problema enfrentado por uma empresa de tecnologia. Foram utilizados conceitos de UX, UI e desenvolvimento front-end.'
      ),
      link: 'https://www.figma.com/board/ne9XFWNsYL3UWzNo3PnN7P/Hackathon-FCamara-2021'
    },
    {
      thumbnail: {
        src: projectHighlightThumbnail,
        fallback: projectHighlightThumbnailFallback,
        alt: t(
          'Miniatura mostrando a interface do editor de código, que conta com a presença do código atual centralizado e algumas opções de personalização ao lado.'
        )
      },
      title: t('Editor Com Destaque de Sintaxe'),
      description: t(
        'Editor de código com destaque de sintaxe, desenvolvido com highlight.js. Também é possível salvar o código no local storage do navegador.'
      ),
      link: 'https://milenaemmert.github.io/alura-challenge-frontend/index.html'
    },
    {
      thumbnail: {
        src: projectPrototypeThumbnail,
        fallback: projectPrototypeThumbnailFallback,
        alt: t(
          'Miniatura mostrando o fluxo do protótipo de alta fidelidade criado para fins de estudo.'
        )
      },
      title: t('Prototipação de UI e Design Gráfico'),
      description: t(
        'Protótipo de alta fidelidade com fluxos de navegação do usuário e exploração dos princípios de design gráfico e análises heurísticas.'
      ),
      link: 'https://www.figma.com/design/pTrubNaItW6ZUUTk8QmiLQ/Local-Imo-App'
    }
  ]
}
