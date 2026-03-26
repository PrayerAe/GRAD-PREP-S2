// codingLabContent.jsx — Coding Lab Content Aggregator
// Assembled from: codingLabContent_p1, p2, p3

export { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'

import { pythonBasicsSections, dataLibrarySections } from './codingLabContent_p1.jsx'
import { mlCodingSections, mlProjectSections } from './codingLabContent_p2.jsx'
import { deepLearningCodingSections, aiToolsSections } from './codingLabContent_p3.jsx'

export const codingLabAllSections = {
  pythonBasics: pythonBasicsSections,
  dataLibrary: dataLibrarySections,
  mlCoding: mlCodingSections,
  mlProjects: mlProjectSections,
  deepLearningCoding: deepLearningCodingSections,
  aiTools: aiToolsSections,
}
