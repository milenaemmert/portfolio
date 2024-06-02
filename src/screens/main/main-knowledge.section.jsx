import { KNOWLEDGE_ANCHOR } from '../../constants'
import { useKnowledges } from '../../hooks'
import { KnowledgeCard } from '../../components'
import s from './main-knowledge.module.css'

export const MainKnowledgeSection = () => {
  const knowledges = useKnowledges()

  return (
    <section id={KNOWLEDGE_ANCHOR} className={s.mainKnowledgeSection}>
      <ul className={s.container}>
        {knowledges.map(({ icon, title, description, list }) => (
          <KnowledgeCard
            key={title}
            icon={icon}
            title={title}
            description={description}
            knowledges={list}
          />
        ))}
      </ul>
    </section>
  )
}
