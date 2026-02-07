import type { AdventureCardProps } from './types'
import styles from './MtgCard.module.css'
import advStyles from './AdventureCard.module.css'
import ManaSymbol from './ManaSymbol'
import { Svg, useCardTheme, getThemeVars, ManaCostRow, SetSymbolIcon, Metadata, Copyright, parseRulesText } from './shared'

// Inline SVGs (rendered as DOM nodes so CSS custom properties inherit)
import coloredBgRaw from '../../assets/colored-bg.svg?raw'
import nameFieldRaw from '../../assets/name-field.svg?raw'
import typelineFieldRaw from '../../assets/typeline-field.svg?raw'
import edgesBorderRaw from '../../assets/edges-border.svg?raw'
import edgesShadowRaw from '../../assets/edges-shadow.svg?raw'
import bgOuterRaw from '../../assets/bg-outer.svg?raw'
import bgInnerRaw from '../../assets/bg-inner.svg?raw'
import legendBorderMaskRaw from '../../assets/legendary-border-mask.svg?raw'
import legendLeftRaw from '../../assets/legendary-left.svg?raw'
import legendRightRaw from '../../assets/legendary-right.svg?raw'

// Static assets
import flavorBarSvg from '../../assets/flavor-bar.svg'
import legendTopImg from '../../assets/legendary-top.webp'

export default function AdventureCard({
  cardName,
  manaCost,
  cardArt,
  typeLine,
  legendary,
  rulesText,
  flavorText,
  power,
  toughness,
  adventureName,
  adventureManaCost,
  adventureTypeLine,
  adventureRulesText,
  cardNumber,
  totalCards,
  rarity,
  setCode,
  language,
  artist,
  year,
}: AdventureCardProps) {
  const hasPT = power !== undefined && toughness !== undefined
  const { theme, textureUrl } = useCardTheme(manaCost, 'adventure')
  const { frameVars, fieldVars, borderVars, legendVars, ptVars } = getThemeVars(theme)

  return (
    <div className={styles.card}>
      {/* 1. Black border */}
      <div className={styles.borderBlack} />

      {/* 2. Frame texture + colored overlay */}
      <div className={styles.textureBg}>
        <img src={textureUrl} alt="" className={styles.textureImg} />
      </div>
      <Svg html={coloredBgRaw} className={styles.coloredBg} style={frameVars} />

      {/* 3. Text box */}
      <div className={styles.textBox}>
        <div className={styles.textBoxBg} style={{ background: theme.text }} />
      </div>

      {/* 4. Edge border decorations */}
      <Svg html={edgesBorderRaw} className={styles.edgesBorder} style={borderVars} />
      <Svg html={edgesShadowRaw} className={styles.edgesShadow} style={borderVars} />

      {/* 4b. Legendary frame overlay */}
      {legendary && (
        <>
          <Svg html={legendBorderMaskRaw} className={styles.legendBorderMask} />
          <div className={styles.legendTop} style={{ filter: theme.legendFilter }}>
            <div className={styles.legendTopInner}>
              <img src={legendTopImg} alt="" className={styles.legendTopImg} />
            </div>
          </div>
          <Svg html={legendLeftRaw} className={styles.legendLeft} style={legendVars} />
          <Svg html={legendRightRaw} className={styles.legendRight} style={legendVars} />
        </>
      )}

      {/* 5. Name field */}
      <div className={styles.nameField}>
        <Svg html={nameFieldRaw} className={styles.fieldBgWrap} style={fieldVars} />
      </div>

      {/* 6. Typeline field */}
      <div className={styles.typelineField}>
        <Svg html={typelineFieldRaw} className={styles.fieldBgWrap} style={fieldVars} />
      </div>

      {/* 7. Card art */}
      <div className={styles.artFrame}>
        {cardArt && <img src={cardArt} alt={cardName} className={styles.artImg} />}
        <div className={styles.artShadow} />
      </div>

      {/* 8. Card name text */}
      <div className={styles.cardName}>{cardName}</div>

      {/* 9. Mana cost */}
      <ManaCostRow manaCost={manaCost} className={styles.manaCost} />

      {/* 10. Type line text */}
      <div className={styles.typeLine}>{typeLine}</div>

      {/* 11. Set symbol */}
      <SetSymbolIcon
        className={styles.setSymbol}
        innerClassName={styles.setSymbolInner}
        fillClassName={styles.fill}
      />

      {/* 12. Split text box: adventure (left) + creature (right) */}
      <div className={advStyles.splitBox}>
        <div className={advStyles.adventureSide}>
          <div className={advStyles.adventureHeader}>
            <span className={advStyles.adventureName}>{adventureName}</span>
            <div className={advStyles.adventureManaCost}>
              {adventureManaCost.map((symbol, i) => (
                <ManaSymbol key={i} symbol={symbol} size={22} />
              ))}
            </div>
          </div>
          <div className={advStyles.adventureTypeLine}>{adventureTypeLine}</div>
          <p className={advStyles.adventureRules}>{parseRulesText(adventureRulesText, 16)}</p>
        </div>

        <div className={advStyles.creatureSide}>
          {rulesText && <p className={advStyles.creatureRules}>{parseRulesText(rulesText, 16)}</p>}
          {flavorText && (
            <>
              <div className={advStyles.flavorBar}>
                <div className={advStyles.flavorBarInner}>
                  <img src={flavorBarSvg} alt="" className={styles.fill} />
                </div>
              </div>
              <p className={advStyles.creatureFlavor}>{flavorText}</p>
            </>
          )}
        </div>
      </div>

      {/* 13. Power / Toughness box */}
      {hasPT && (
        <div className={styles.ptBox}>
          <Svg html={bgOuterRaw} className={styles.ptOuter} style={ptVars} />
          <Svg html={bgInnerRaw} className={styles.ptInner} style={ptVars} />
          <span className={styles.ptText}>{power}/{toughness}</span>
        </div>
      )}

      {/* 14. Metadata */}
      <Metadata
        className={styles.metadata}
        rowClassName={styles.metaRow}
        numClassName={styles.metaNum}
        rarityClassName={styles.metaRarity}
        creditClassName={styles.metaCredit}
        setClassName={styles.metaSet}
        artistIconClassName={styles.artistIcon}
        artistNameClassName={styles.artistName}
        cardNumber={cardNumber}
        totalCards={totalCards}
        rarity={rarity}
        setCode={setCode}
        language={language}
        artist={artist}
      />

      {/* 15. Copyright */}
      <Copyright className={styles.copyright} year={year} />
    </div>
  )
}
