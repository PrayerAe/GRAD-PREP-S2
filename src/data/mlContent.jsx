// mlContent.jsx — ML / Data Science / AI Rich Content
// Assembled from: mlContent_p1, mlContent_p2, mlContent_p3, mlContent_p4

export { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
export { pythonSections } from './mlContent_p1.jsx'
export { mlSections } from './mlContent_p2.jsx'
export { deeplearningSections } from './mlContent_p3.jsx'
export { nlpSections, datascienceSections } from './mlContent_p4.jsx'

import { pythonSections } from './mlContent_p1.jsx'
import { mlSections } from './mlContent_p2.jsx'
import { deeplearningSections } from './mlContent_p3.jsx'
import { nlpSections, datascienceSections } from './mlContent_p4.jsx'

export const mlAllSections = {
  python: pythonSections,
  ml: mlSections,
  deeplearning: deeplearningSections,
  nlp: nlpSections,
  datascience: datascienceSections,
}
