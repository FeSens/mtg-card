import type { CSSProperties } from 'react'
import type { StandardCardProps } from './types'
import styles from './MtgCard.module.css'
import ManaSymbol from './ManaSymbol'
import { Svg, DropShadow, useCardTheme, getThemeVars, ManaCostRow, SetSymbolIcon, Metadata, Copyright, parseRulesText } from './shared'

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

export default function StandardCard({
  frame,
  cardName,
  manaCost,
  cardArt,
  typeLine,
  legendary,
  rulesText,
  flavorText,
  power,
  toughness,
  landSymbol,
  cardNumber,
  totalCards,
  rarity,
  setCode,
  setSymbolUrl,
  language,
  artist,
  year,
}: StandardCardProps) {
  const hasPT = power !== undefined && toughness !== undefined
  const isVehicle = frame === 'vehicle'
  const { theme, textureUrl } = useCardTheme(manaCost, frame)
  const { frameVars, fieldVars, borderVars, legendVars, ptVars } = getThemeVars(theme)
  const vehicleFrameVars = { '--fill-0': '#C49A6C' } as CSSProperties

  return (
    <div className={styles.card}>
      {/* 1. Black border (outermost rounded rect) */}
      <div className={styles.borderBlack} />

      {/* 2. Frame texture + colored overlay */}
      <div className={styles.textureBg}>
        <img src={textureUrl} alt="" className={`${styles.textureImg}${isVehicle ? ` ${styles.textureImgVehicle}` : ''}`} />
      </div>
      <Svg html={coloredBgRaw} className={styles.coloredBg} style={isVehicle ? vehicleFrameVars : frameVars} />

      {/* 3. Text box (cream/colored area for rules text) */}
      <div className={styles.textBox}>
        <div className={styles.textBoxBg} style={{ background: theme.text }} />
      </div>

      {/* 4. Edge border decorations */}
      <Svg html={edgesBorderRaw} className={`${styles.edgesBorder}${legendary ? ` ${styles.edgesBorderLegendary}` : ''}`} style={borderVars} />
      <Svg html={edgesShadowRaw} className={`${styles.edgesShadow}${legendary ? ` ${styles.edgesShadowLegendary}` : ''}`} style={borderVars} />
      <DropShadow className={styles.dropShadow} style={borderVars} />

      {/* 4b. Legendary frame overlay */}
      {legendary && (
        <>
          <Svg html={legendBorderMaskRaw} className={styles.legendBorderMask} />
          <Svg html={legendLeftRaw} className={styles.legendLeft} style={legendVars} />
          <Svg html={legendRightRaw} className={styles.legendRight} style={legendVars} />
          <div className={styles.legendTop} style={{ filter: theme.legendFilter }}>
            <img src={legendTopImg} alt="" className={styles.legendTopImg} />
          </div>
        </>
      )}

      {/* 5. Name field */}
      <div className={styles.nameField}>
        <Svg html={nameFieldRaw} className={styles.fieldBgWrap} style={fieldVars} />
        <div className={styles.fieldShadow} />
      </div>

      {/* 6. Typeline field */}
      <div className={styles.typelineField}>
        <Svg html={typelineFieldRaw} className={styles.fieldBgWrap} style={fieldVars} />
        <div className={styles.fieldShadow} />
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
        setCode={setCode}
        rarity={rarity}
        setSymbolUrl={setSymbolUrl}
      />

      {/* 12. Rules + Flavor text area OR land symbol */}
      {landSymbol ? (
        <div className={styles.landSymbol}>
          <ManaSymbol symbol={landSymbol} size={178} />
        </div>
      ) : (
        <div className={styles.rulesArea}>
          {rulesText && <p className={styles.rulesText}>{parseRulesText(rulesText)}</p>}
          {flavorText && (
            <>
              <div className={styles.flavorBar}>
                <div className={styles.flavorBarInner}>
                  <img src={flavorBarSvg} alt="" className={styles.fill} />
                </div>
              </div>
              <p className={styles.flavorText}>{flavorText}</p>
            </>
          )}
        </div>
      )}

      {/* 13. Power / Toughness box */}
      {hasPT && (
        <div className={styles.ptBox}>
          <Svg html={bgOuterRaw} className={styles.ptOuter} style={isVehicle ? { '--fill-0': '#FFFFFF' } as CSSProperties : ptVars} />
          <Svg html={bgInnerRaw} className={styles.ptInner} style={isVehicle ? { '--fill-0': '#FFFFFF' } as CSSProperties : ptVars} />
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
