export interface CardColorTheme {
  card: string      // colored background frame
  nameType: string  // name field + typeline field fill
  text: string      // text box background
  border: string    // edges/border stroke
  legendFilter: string  // CSS filter for legendary crown recoloring (base image is red)
}

const COLOR_THEMES: Record<string, CardColorTheme> = {
  W: { card: '#DBCFAC', nameType: '#F2F1EFF2', text: '#F2F2F1E7', border: '#F6FCFC', legendFilter: 'saturate(0) brightness(1.6)' },
  U: { card: '#3B90B9', nameType: '#A9CCE5F2', text: '#D2E4F4E7', border: '#1971CE', legendFilter: 'hue-rotate(200deg) saturate(1.2)' },
  B: { card: '#323232', nameType: '#BAB4B5F2', text: '#DFDEDEE7', border: '#403232', legendFilter: 'saturate(0.3) brightness(0.35)' },
  R: { card: '#BB5540', nameType: '#FFE0D3F2', text: '#FFEAE2E7', border: '#C5432B', legendFilter: 'none' },
  G: { card: '#718971', nameType: '#CFDDCDF2', text: '#E2E5E0E7', border: '#324F33', legendFilter: 'hue-rotate(100deg) saturate(0.9)' },
  gold: { card: '#CBA74C', nameType: '#DCBB78F2', text: '#FCF4DFE7', border: '#D9CC71', legendFilter: 'hue-rotate(30deg) saturate(1.3) brightness(1.1)' },
  artifact: { card: '#969EA3', nameType: '#D5DAE1F2', text: '#DFE3E4E7', border: '#F0F3F2', legendFilter: 'saturate(0.15) brightness(1.1)' },
  colorless: { card: '#969EA3', nameType: '#DFDEDEF2', text: '#DFDEDEE7', border: '#E7E8E2', legendFilter: 'saturate(0.1) brightness(1.2)' },
}

/** Per-pair text box colors for dual-color gold cards (from Figma styles) */
const DUAL_TEXT_COLORS: Record<string, string> = {
  WU: '#E8EDF5E7', UW: '#E8EDF5E7',
  WB: '#E8E4E2E7', BW: '#E8E4E2E7',
  WR: '#FFFFFFE7', RW: '#FFFFFFE7',
  WG: '#EDF0E8E7', GW: '#EDF0E8E7',
  UB: '#D8DDE8E7', BU: '#D8DDE8E7',
  UR: '#E8DDEDE7', RU: '#E8DDEDE7',
  UG: '#D8E8E4E7', GU: '#D8E8E4E7',
  BR: '#E8D8D8E7', RB: '#E8D8D8E7',
  BG: '#DDE4D8E7', GB: '#DDE4D8E7',
  RG: '#F0E8D8E7', GR: '#F0E8D8E7',
}

const WUBRG = new Set(['W', 'U', 'B', 'R', 'G'])

/**
 * Determine the card's color identity from its mana cost symbols.
 * Returns the appropriate color theme.
 *
 * Rules:
 * - Single color (only one of WUBRG in cost) → that color's theme
 * - Two colors → gold theme with pair-specific text box color
 * - Three+ colors → gold theme
 * - No colors (generic/colorless only) → colorless theme
 */
export function getColorTheme(manaCost: string[], frame?: string): CardColorTheme {
  const colors = new Set<string>()

  for (const sym of manaCost) {
    const s = sym.toUpperCase()

    // Basic WUBRG
    if (WUBRG.has(s)) {
      colors.add(s)
      continue
    }

    // Hybrid mana "X/Y" — both colors count
    if (s.includes('/')) {
      const [a, b] = s.split('/')
      if (WUBRG.has(a)) colors.add(a)
      if (WUBRG.has(b)) colors.add(b)
    }
  }

  // Vehicles with no color identity use artifact theme (they're artifacts)
  if (colors.size === 0 && frame === 'vehicle') return COLOR_THEMES.artifact
  if (colors.size === 0) return COLOR_THEMES.colorless
  if (colors.size === 1) {
    const [color] = colors
    return COLOR_THEMES[color]
  }

  // Dual-color: gold frame with pair-specific text box color
  if (colors.size === 2) {
    const key = [...colors].join('')
    const dualText = DUAL_TEXT_COLORS[key]
    if (dualText) {
      return { ...COLOR_THEMES.gold, text: dualText }
    }
  }

  return COLOR_THEMES.gold
}
