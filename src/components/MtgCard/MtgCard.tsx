import type { MtgCardProps } from './types'
import StandardCard from './StandardCard'
import AdventureCard from './AdventureCard'
import PlaneswalkerCard from './PlaneswalkerCard'
import SagaCard from './SagaCard'

export default function MtgCard(props: MtgCardProps) {
  switch (props.frame) {
    case 'planeswalker':
      return <PlaneswalkerCard {...props} />
    case 'saga':
      return <SagaCard {...props} />
    case 'adventure':
      return <AdventureCard {...props} />
    case 'standard':
    case 'vehicle':
    case 'mutate':
    case 'land':
    default:
      return <StandardCard {...props} />
  }
}
