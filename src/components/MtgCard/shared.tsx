import type { CSSProperties, ReactNode } from 'react'
import ManaSymbol from './ManaSymbol'
import { getColorTheme, type CardColorTheme } from './colors'

// Static assets (no theming needed)
import artistIcon from '../../assets/artist-icon.svg'
import setSymbolSvg from '../../assets/set-symbol.svg'

// Inline SVGs shared across card types
import edgesMaskRaw from '../../assets/edges-mask.svg?raw'

// Frame background textures
import bgWhite from '../../assets/bgWhite.webp'
import bgBlue from '../../assets/bgBlue.webp'
import bgBlack from '../../assets/bgBlack.webp'
import bgRed from '../../assets/bgRed.webp'
import bgGreen from '../../assets/bgGreen.webp'
import bgGold from '../../assets/bgGold.webp'
import bgArtifact from '../../assets/bgArtifact.webp'
import bgWB from '../../assets/bgWB.webp'
import bgUB from '../../assets/bgUB.webp'
import bgUR from '../../assets/bgUR.webp'
import bgBR from '../../assets/bgBR.webp'
import bgBG from '../../assets/bgBG.webp'
import bgRW from '../../assets/bgRW.webp'
import bgRG from '../../assets/bgRG.webp'
import bgGW from '../../assets/bgGW.webp'
import bgGU from '../../assets/bgGU.webp'
import bgLand from '../../assets/bgLand.webp'

const MONO_TEXTURES: Record<string, string> = {
  W: bgWhite, U: bgBlue, B: bgBlack, R: bgRed, G: bgGreen,
}
const DUAL_TEXTURES: Record<string, string> = {
  WB: bgWB, BW: bgWB,
  UB: bgUB, BU: bgUB,
  UR: bgUR, RU: bgUR,
  BR: bgBR, RB: bgBR,
  BG: bgBG, GB: bgBG,
  RW: bgRW, WR: bgRW,
  RG: bgRG, GR: bgRG,
  GW: bgGW, WG: bgGW,
  GU: bgGU, UG: bgGU,
}

export function getTextureUrl(manaCost: string[], frame?: string): string {
  // Vehicles always use the brown wooden artifact texture
  if (frame === 'vehicle') return bgArtifact
  const WUBRG = new Set(['W', 'U', 'B', 'R', 'G'])
  const colors = new Set<string>()
  for (const sym of manaCost) {
    const s = sym.toUpperCase()
    if (WUBRG.has(s)) { colors.add(s); continue }
    if (s.includes('/')) {
      const [a, b] = s.split('/')
      if (WUBRG.has(a)) colors.add(a)
      if (WUBRG.has(b)) colors.add(b)
    }
  }
  // Lands with no color identity use the land texture
  if (frame === 'land' && colors.size === 0) return bgLand
  if (colors.size === 0) return bgArtifact
  if (colors.size === 1) { const [c] = colors; return MONO_TEXTURES[c] }
  if (colors.size === 2) {
    const key = [...colors].join('')
    if (DUAL_TEXTURES[key]) return DUAL_TEXTURES[key]
  }
  return bgGold
}

/** Inline SVG helper — renders raw SVG as DOM so CSS custom properties inherit */
export function Svg({ html, className, style }: { html: string; className?: string; style?: CSSProperties }) {
  return <div className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />
}

/** Dark drop shadow on the left edge of the card border (edges-mask.svg from Figma) */
export function DropShadow({ className, style }: {
  className: string
  style?: CSSProperties
}) {
  return <Svg html={edgesMaskRaw} className={className} style={style} />
}

/** Derive theme + texture from mana cost */
export function useCardTheme(manaCost: string[], frame?: string) {
  const theme = getColorTheme(manaCost, frame)
  const textureUrl = getTextureUrl(manaCost, frame)
  return { theme, textureUrl }
}

/** CSS variable objects for SVG theming */
export function getThemeVars(theme: CardColorTheme) {
  return {
    frameVars: { '--fill-0': theme.card } as CSSProperties,
    fieldVars: { '--fill-0': theme.nameType } as CSSProperties,
    borderVars: { '--stroke-0': theme.border } as CSSProperties,
    legendVars: { '--fill-0': theme.border } as CSSProperties,
    ptVars: { '--fill-0': theme.nameType } as CSSProperties,
  }
}

/** Parse rules text, replacing {T}, {G}, {1}, {W/U} etc. with inline ManaSymbol components */
export function parseRulesText(text: string, size = 22): ReactNode[] {
  const parts = text.split(/(\{[^}]+\})/)
  return parts.map((part, i) => {
    const match = part.match(/^\{([^}]+)\}$/)
    if (match) {
      return <ManaSymbol key={i} symbol={match[1]} size={size} margin={4} />
    }
    return part
  })
}

/** Mana cost row */
export function ManaCostRow({ manaCost, className }: { manaCost: string[]; className: string }) {
  return (
    <div className={className}>
      {manaCost.map((symbol, i) => (
        <ManaSymbol key={i} symbol={symbol} />
      ))}
    </div>
  )
}

/** Set symbol icon */
export function SetSymbolIcon({ className, innerClassName, fillClassName }: {
  className: string; innerClassName: string; fillClassName: string
}) {
  return (
    <div className={className}>
      <div className={innerClassName}>
        <img src={setSymbolSvg} alt="" className={fillClassName} />
      </div>
    </div>
  )
}

/** Metadata block (bottom-left) */
export function Metadata({
  className, rowClassName, numClassName, rarityClassName,
  creditClassName, setClassName, artistIconClassName, artistNameClassName,
  cardNumber, totalCards, rarity, setCode, language, artist,
}: {
  className: string; rowClassName: string; numClassName: string; rarityClassName: string
  creditClassName: string; setClassName: string; artistIconClassName: string; artistNameClassName: string
  cardNumber?: string; totalCards?: string; rarity?: string; setCode?: string; language?: string; artist?: string
}) {
  return (
    <div className={className}>
      <div className={rowClassName}>
        <span className={numClassName}>
          {cardNumber && totalCards && (
            <>
              <span style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>{cardNumber}</span>
              <span style={{ fontStyle: 'italic' }}>/</span>
              <span style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>{totalCards}</span>
            </>
          )}
        </span>
        {rarity && <span className={rarityClassName}>{rarity}</span>}
        <span className={creditClassName}>Made by Felipe Bonetto</span>
      </div>
      <div className={rowClassName}>
        <span className={setClassName}>
          {[setCode, language].filter(Boolean).join(' \u2022 ')}
        </span>
        <img src={artistIcon} alt="" className={artistIconClassName} />
        <span className={artistNameClassName}>{artist}</span>
      </div>
    </div>
  )
}

/** Copyright (bottom-right) */
export function Copyright({ className, year }: { className: string; year?: string }) {
  return (
    <div className={className}>
      <span style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>{year ?? '2026'}</span>
      {' Fan Made Card & Not For Sale'}
    </div>
  )
}
