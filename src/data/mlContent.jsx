// mlContent.jsx — ML / Data Science / AI Rich Content
// Assembled from: mlContent_p1 through p4b

export { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'

import { pythonSections } from './mlContent_p1.jsx'
import { mlSections } from './mlContent_p2.jsx'
import { mlSectionsB } from './mlContent_p2b.jsx'
import { deeplearningSections } from './mlContent_p3.jsx'
import { deeplearningSectionsB } from './mlContent_p3b.jsx'
import { nlpSections, datascienceSections } from './mlContent_p4.jsx'
import { nlpSectionsB, datascienceSectionsB } from './mlContent_p4b.jsx'

export const mlAllSections = {
  python: pythonSections,
  ml: [...mlSections, ...mlSectionsB],
  deeplearning: [...deeplearningSections, ...deeplearningSectionsB],
  nlp: [...nlpSections, ...nlpSectionsB],
  datascience: [...datascienceSections, ...datascienceSectionsB],
}
