import { KnowledgeCard } from '@components'
import { KNOWLEDGE_ANCHOR } from '@constants'
import { useKnowledges } from '@hooks'

import s from './main-knowledge.module.css'

export const MainKnowledgeSection = () => {
  const knowledges = useKnowledges()

  return (
    <section className={s.mainKnowledgeSection} id={KNOWLEDGE_ANCHOR}>
      <ul className={s.container}>
        {knowledges.map(({ icon, title, description, list }) => (
          <KnowledgeCard
            description={description}
            icon={icon}
            key={title}
            knowledges={list}
            title={title}
          />
        ))}
      </ul>
    </section>
  )
}
