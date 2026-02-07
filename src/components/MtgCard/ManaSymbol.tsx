import styles from './MtgCard.module.css'

// Color mana backgrounds (circles)
import manaWSym from '../../assets/mana-w-sym.svg'
import manaUSym from '../../assets/mana-u-sym.svg'
import manaGeneric from '../../assets/mana-generic.svg'
import manaRSym from '../../assets/mana-r-sym.svg'
import manaGSym from '../../assets/mana-g-sym.svg'
import manaCSym from '../../assets/mana-c.svg'
import manaESym from '../../assets/mana-e.svg'
import manaSBg from '../../assets/mana-s-bg.svg'
import manaSInner from '../../assets/mana-s-inner.svg'
import mana10 from '../../assets/mana-10.svg'

// Color mana vectors (inner symbols)
import vectorWSym from '../../assets/vector-w-sym.svg'
import vectorUSym from '../../assets/vector-u-sym.svg'
import vectorBSym from '../../assets/vector-b-sym.svg'
import vectorRSym from '../../assets/vector-r-sym.svg'
import vectorGSym from '../../assets/vector-g-sym.svg'
import vectorCSym from '../../assets/vector-c.svg'
import vectorTSym from '../../assets/vector-t.svg'
import vectorXSym from '../../assets/vector-x.svg'

// Number vectors (0-9)
import vector0 from '../../assets/vector-0.svg'
import vector1 from '../../assets/vector-1-new.svg'
import vector2 from '../../assets/vector-2.svg'
import vector3 from '../../assets/vector-3.svg'
import vector4 from '../../assets/vector-4.svg'
import vector5 from '../../assets/vector-5.svg'
import vector6 from '../../assets/vector-6.svg'
import vector7 from '../../assets/vector-7.svg'
import vector8 from '../../assets/vector-8.svg'
import vector9 from '../../assets/vector-9.svg'

// Number vectors (11-20) - for the larger circle style
import vector11 from '../../assets/vector-11.svg'
import vector12 from '../../assets/vector-12.svg'
import vector13 from '../../assets/vector-13.svg'
import vector14 from '../../assets/vector-14.svg'
import vector15 from '../../assets/vector-15.svg'
import vector16 from '../../assets/vector-16.svg'
import vector17 from '../../assets/vector-17.svg'
import vector18 from '../../assets/vector-18.svg'
import vector19 from '../../assets/vector-19.svg'
import vector20 from '../../assets/vector-20.svg'

// Hybrid mana backgrounds
import hybridWuBg from '../../assets/hybrid-wu-bg.svg'
import hybridUbBg from '../../assets/hybrid-ub-bg.svg'
import hybridRwBg from '../../assets/hybrid-rw-bg.svg'
import hybridUrBg from '../../assets/hybrid-ur-bg.svg'
import hybridGwBg from '../../assets/hybrid-gw-bg.svg'
import hybridBrBg from '../../assets/hybrid-br-bg.svg'
// Hybrid mana group overlays
import hybridGroupWu from '../../assets/hybrid-group-wu.svg'
import hybridGroupWb from '../../assets/hybrid-group-wb.svg'
import hybridGroupUb from '../../assets/hybrid-group-ub.svg'
import hybridGroupRw from '../../assets/hybrid-group-rw.svg'
import hybridGroupRg from '../../assets/hybrid-group-rg.svg'
import hybridGroupUr from '../../assets/hybrid-group-ur.svg'
import hybridGroupGw from '../../assets/hybrid-group-gw.svg'
import hybridGroupGu from '../../assets/hybrid-group-gu.svg'
import hybridGroupBr from '../../assets/hybrid-group-br.svg'
import hybridGroupBg from '../../assets/hybrid-group-bg.svg'

// Phyrexian mana
import phyWp from '../../assets/phy-wp.svg'
import phyUp from '../../assets/phy-up.svg'
import phyBp from '../../assets/phy-bp.svg'
import phyRp from '../../assets/phy-rp.svg'
import phyGp from '../../assets/phy-gp.svg'
import phyVector from '../../assets/phy-vector.svg'
import phyVectorGp from '../../assets/phy-vector-gp.svg'
import phyVectorBp from '../../assets/phy-vector-bp.svg'

// ---- Symbol data maps ----

// Standard color mana: background circle + inner vector
const COLOR_MANA: Record<string, { bg: string; vector: string; inset: string }> = {
  W: { bg: manaWSym, vector: vectorWSym, inset: '2.07% 2.27% 2.05% 2.35%' },
  U: { bg: manaUSym, vector: vectorUSym, inset: '10.54% 25.34% 8.97% 24.55%' },
  B: { bg: manaGeneric, vector: vectorBSym, inset: '7.77% 9.25% 7.75% 9.33%' },
  R: { bg: manaRSym, vector: vectorRSym, inset: '6.78% 6.65% 7.38% 16.23%' },
  G: { bg: manaGSym, vector: vectorGSym, inset: '6.4% 6.22% 4.78% 6.45%' },
  C: { bg: manaCSym, vector: vectorCSym, inset: '10%' },
}

// Generic number mana (0-9): gray circle bg + number vector
const NUMBER_VECTORS: Record<string, { vector: string; inset: string }> = {
  '0': { vector: vector0, inset: '10.83% 23% 11.17% 23.5%' },
  '1': { vector: vector1, inset: '8.67% 31.5% 12.83% 32.17%' },
  '2': { vector: vector2, inset: '10.78% 20.5% 13% 25.83%' },
  '3': { vector: vector3, inset: '10.45% 21% 11.33% 26.17%' },
  '4': { vector: vector4, inset: '10.5% 25.5% 12.83% 18.67%' },
  '5': { vector: vector5, inset: '10.67% 24.83% 11.33% 25.17%' },
  '6': { vector: vector6, inset: '10.83% 24.17% 11.17% 24.67%' },
  '7': { vector: vector7, inset: '10.5% 24.17% 12.67% 24.17%' },
  '8': { vector: vector8, inset: '10.5% 24.33% 11.17% 24.5%' },
  '9': { vector: vector9, inset: '10.83% 24% 11.17% 24.4%' },
}

// Numbers 11-20: larger circle bg with different vectors
const LARGE_NUMBER_VECTORS: Record<string, { vector: string; inset: string }> = {
  '11': { vector: vector11, inset: '18.32% 18.9% 18.32% 21.57%' },
  '12': { vector: vector12, inset: '19.22% 13.41% 19.21% 18%' },
  '13': { vector: vector13, inset: '19.79% 12.6% 19.79% 20.6%' },
  '14': { vector: vector14, inset: '19.47% 11.45% 19.47% 18.68%' },
  '15': { vector: vector15, inset: '18.13% 15.63% 18.13% 16.41%' },
  '16': { vector: vector16, inset: '18.32% 14.72% 18.32% 16.04%' },
  '17': { vector: vector17, inset: '19.02% 15.96%' },
  '18': { vector: vector18, inset: '18.96% 14.33% 18.96% 18.22%' },
  '19': { vector: vector19, inset: '18.58% 12.38% 18.57% 19.15%' },
  '20': { vector: vector20, inset: '17.54% 6.14% 21.53% 11.98%' },
}

// Hybrid mana: two-color bg + group overlay
const HYBRID_MANA: Record<string, { bg: string; group: string; inset: string }> = {
  'W/U': { bg: hybridWuBg, group: hybridGroupWu, inset: '10.57% 0 0 14.65%' },
  'W/B': { bg: hybridWuBg, group: hybridGroupWb, inset: '10.55% 0 0 14.65%' },
  'U/B': { bg: hybridUbBg, group: hybridGroupUb, inset: '7% 0.01% 0 14.64%' },
  'U/R': { bg: hybridUrBg, group: hybridGroupUr, inset: '6.99% -0.01% -0.01% 14.66%' },
  'B/R': { bg: hybridBrBg, group: hybridGroupBr, inset: '8.07% 0 0 13.4%' },
  'B/G': { bg: hybridBrBg, group: hybridGroupBg, inset: '8.07% 0 0 13.41%' },
  'R/W': { bg: hybridRwBg, group: hybridGroupRw, inset: '10.52% 0 -0.01% 14.65%' },
  'R/G': { bg: hybridRwBg, group: hybridGroupRg, inset: '10.52% -0.01% -0.01% 14.66%' },
  'G/W': { bg: hybridGwBg, group: hybridGroupGw, inset: '11.64% 0 -0.01% 12.02%' },
  'G/U': { bg: hybridGwBg, group: hybridGroupGu, inset: '11.6% 0 0 12.02%' },
}

// Phyrexian mana
const PHYREXIAN_MANA: Record<string, { bg: string; vector: string; inset: string }> = {
  'W/P': { bg: phyWp, vector: phyVector, inset: '0.98% 22.25% 1% 22.25%' },
  'U/P': { bg: phyUp, vector: phyVector, inset: '0.98% 22.25% 1% 22.25%' },
  'B/P': { bg: phyBp, vector: phyVectorBp, inset: '1% 22.25% 0.98% 22.25%' },
  'R/P': { bg: phyRp, vector: phyVector, inset: '0.98% 22.25% 1% 22.25%' },
  'G/P': { bg: phyGp, vector: phyVectorGp, inset: '0.98% 22.27% 1% 22.25%' },
}

interface ManaSymbolProps {
  symbol: string
  size?: number
  margin?: number
}

export default function ManaSymbol({ symbol, size = 32, margin = 0 }: ManaSymbolProps) {
  const s = symbol.toUpperCase()
  const sizeStyle = { width: size, height: size, marginBottom:  margin}

  // Phyrexian mana (e.g. "W/P", "U/P")
  if (PHYREXIAN_MANA[s]) {
    const { bg, vector, inset } = PHYREXIAN_MANA[s]
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={bg} alt={s} className={styles.manaSymbolBg} />
        <div className={styles.manaSymbolVector} style={{ inset }}>
          <img src={vector} alt="" className={styles.fill} />
        </div>
      </div>
    )
  }

  // Hybrid mana (e.g. "W/U", "B/R")
  if (HYBRID_MANA[s]) {
    const { bg, group, inset } = HYBRID_MANA[s]
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={bg} alt={s} className={styles.manaSymbolBg} />
        <div className={styles.manaSymbolVector} style={{ inset }}>
          <img src={group} alt="" className={styles.fill} />
        </div>
      </div>
    )
  }

  // Standard color mana (W, U, B, R, G, C)
  if (COLOR_MANA[s]) {
    const { bg, vector, inset } = COLOR_MANA[s]
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={bg} alt={s} className={styles.manaSymbolBg} />
        <div className={styles.manaSymbolVector} style={{ inset }}>
          <img src={vector} alt="" className={styles.fill} />
        </div>
      </div>
    )
  }

  // Tap symbol
  if (s === 'T') {
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={manaGeneric} alt="T" className={styles.manaSymbolBg} />
        <div className={styles.manaSymbolVector} style={{ inset: '25.43% 14.63% 8.9% 22.35%' }}>
          <img src={vectorTSym} alt="" className={styles.fill} />
        </div>
      </div>
    )
  }

  // Snow mana
  if (s === 'S') {
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={manaSBg} alt="S" className={styles.manaSymbolBg} />
        <img src={manaSInner} alt="" className={styles.manaSymbolBg} style={{ position: 'absolute', inset: 0 }} />
      </div>
    )
  }

  // Energy symbol
  if (s === 'E') {
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={manaESym} alt="E" className={styles.manaSymbolBg} />
      </div>
    )
  }

  // X mana
  if (s === 'X') {
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={vectorXSym} alt="X" className={styles.manaSymbolBg} />
      </div>
    )
  }

  // Number 10 (single composite image)
  if (s === '10') {
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={mana10} alt="10" className={styles.manaSymbolBg} />
      </div>
    )
  }

  // Numbers 11-20 (larger circle style)
  if (LARGE_NUMBER_VECTORS[s]) {
    const { vector, inset } = LARGE_NUMBER_VECTORS[s]
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={manaSBg} alt={s} className={styles.manaSymbolBg} />
        <div className={styles.manaSymbolVector} style={{ inset }}>
          <img src={vector} alt="" className={styles.fill} />
        </div>
      </div>
    )
  }

  // Generic number mana (0-9)
  const num = NUMBER_VECTORS[s]
  if (num) {
    return (
      <div className={styles.manaSymbol} style={sizeStyle}>
        <img src={manaGeneric} alt={s} className={styles.manaSymbolBg} />
        <div className={styles.manaSymbolVector} style={{ inset: num.inset }}>
          <img src={num.vector} alt="" className={styles.fill} />
        </div>
      </div>
    )
  }

  // Fallback: render the text in a gray circle
  return (
    <div className={styles.manaSymbol} style={sizeStyle}>
      <img src={manaGeneric} alt={s} className={styles.manaSymbolBg} />
      <span className={styles.manaSymbolFallback}>{s}</span>
    </div>
  )
}
