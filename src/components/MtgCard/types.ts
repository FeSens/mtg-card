export interface MtgCardBaseProps {
  cardName: string
  manaCost: string[]
  cardArt?: string
  typeLine: string
  legendary?: boolean
  cardNumber?: string
  totalCards?: string
  rarity?: string
  setCode?: string
  setSymbolUrl?: string
  language?: string
  artist?: string
  year?: string
}

export interface StandardCardProps extends MtgCardBaseProps {
  frame?: 'standard' | 'vehicle' | 'mutate' | 'land'
  rulesText?: string
  flavorText?: string
  power?: string
  toughness?: string
  landSymbol?: string
}

export interface AdventureCardProps extends MtgCardBaseProps {
  frame: 'adventure'
  rulesText?: string
  flavorText?: string
  power?: string
  toughness?: string
  adventureName: string
  adventureManaCost: string[]
  adventureTypeLine: string
  adventureRulesText: string
}

export interface PlaneswalkerCardProps extends MtgCardBaseProps {
  frame: 'planeswalker'
  loyaltyAbilities: { cost: string; text: string }[]
  startingLoyalty: string
}

export interface SagaCardProps extends MtgCardBaseProps {
  frame: 'saga'
  chapters: { numerals: string; text: string }[]
  reminderText?: string
}

export type MtgCardProps = StandardCardProps | AdventureCardProps | PlaneswalkerCardProps | SagaCardProps
