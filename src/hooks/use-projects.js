import projectIco from '../assets/images/project-ico.png'
import projectHackaton from '../assets/images/project-hackaton.png'
import projectSnippet from '../assets/images/project-snippets.png'
import { useTranslation } from '.'

export const useProjects = () => {
  const { t } = useTranslation()

  return [
    {
      thumbnail: projectIco,
      title: t('Project ICO'),
      description: t(
        'Plataforma de ícones visualmente atrativa, totalmente responsiva e com boas práticas de acessibilidade. Feita com apenas HTML, CSS e JavaScript vanilla.'
      ),
      link: 'https://ico-dun-seven.vercel.app'
    },
    {
      thumbnail: projectHackaton,
      title: t('Hackathon de UX/UI'),
      description: t(
        'Solução proposta através de UX, UI e desenvolvimento para um problema enfrentado por uma empresa de tecnologia.'
      ),
      link: 'https://www.figma.com/board/ne9XFWNsYL3UWzNo3PnN7P/Hackathon-FCamara-2021'
    },
    {
      thumbnail: projectSnippet,
      title: t('Code snippet highlight'),
      description: t(
        'Editor de pequenos códigos (snippets) com aplicação de "sintaxe highlight", utilizando a lib highlight.js. É possível salvar o código no local storage do navegador.'
      ),
      link: 'https://milenaemmert.github.io/alura-challenge-frontend/index.html'
    },
    {
      thumbnail: projectIco,
      title: t('Prototipação de UI e design gráfico'),
      description: t(
        'Protótipo de alta fidelidade com fluxos de navegação do usuário e exploração dos princípios de design gráfico e análises heurísticas.'
      ),
      link: 'https://www.figma.com/design/pTrubNaItW6ZUUTk8QmiLQ/Local-Imo-App'
    }
  ]
}
