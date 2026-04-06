import {queryBasicsSection} from './query-basics'
import {queryAdvancedSection} from './query-advanced'
import {mutationsSection} from './mutations'
import {advancedPatternsSection} from './advanced-patterns'
import {routerGuideSection} from './router-guide'
import {expertPatternsSection} from './expert-patterns'
import {reactFundamentalsSections} from './react-fundamentals'
import {reactIntermediateAllSections} from './react-intermediate'
import {reactProfessionalSections} from './react-professional'
import {oldVsTanstackSections} from './old-vs-tanstack'
import type {Section} from '../components/GuideSection'

export const tanstackQuerySections: Section[] = [
  queryBasicsSection,
  queryAdvancedSection,
  mutationsSection,
  advancedPatternsSection,
  routerGuideSection,
  expertPatternsSection,
]

export {
  reactFundamentalsSections,
  reactIntermediateAllSections,
  reactProfessionalSections,
  oldVsTanstackSections,
}
