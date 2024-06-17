import {
  MainAboutSection,
  MainCollaborationSection,
  MainContactSection,
  MainKnowledgeSection,
  MainProjectsSection
} from '@screens'

import s from './main.module.css'

export const MainScreen = () => {
  return (
    <main className={s.mainScreen}>
      <MainAboutSection />
      <MainKnowledgeSection />
      <MainProjectsSection />
      <MainCollaborationSection />
      <MainContactSection />
    </main>
  )
}
