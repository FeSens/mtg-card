import type { SagaCardProps } from './types'
import styles from './SagaCard.module.css'
import { Svg, useCardTheme, getThemeVars, ManaCostRow, SetSymbolIcon, Metadata, Copyright, parseRulesText } from './shared'

// Inline SVGs (rendered as DOM nodes so CSS custom properties inherit)
import sagaColoredBgRaw from '../../assets/saga-colored-bg.svg?raw'
import sagaEdgesRaw from '../../assets/saga-edges.svg?raw'
import sagaEdgesShadowRaw from '../../assets/saga-edges-shadow.svg?raw'
import nameFieldRaw from '../../assets/name-field.svg?raw'
import typelineFieldRaw from '../../assets/typeline-field.svg?raw'

// Saga-specific assets
import sagaBannerBorderRaw from '../../assets/saga-banner-border.svg?raw'
import sagaBannerColumnRaw from '../../assets/saga-banner-column.svg?raw'
import sagaBannerReverseRaw from '../../assets/saga-banner-reverse.svg?raw'
import sagaBannerSpike1Raw from '../../assets/saga-banner-spike1.svg?raw'
import sagaBannerSpike2Raw from '../../assets/saga-banner-spike2.svg?raw'
import sagaLoreOuterRaw from '../../assets/saga-lore-outer.svg?raw'
import sagaLoreInnerRaw from '../../assets/saga-lore-inner.svg?raw'
import sagaDividerRaw from '../../assets/saga-divider.svg?raw'

const DEFAULT_REMINDER = '(As this Saga enters and after your draw step, add a lore counter. Sacrifice after III).'

function LoreStep({ numerals }: { numerals: string }) {
  return (
    <div className={styles.loreStep}>
      <div className={styles.loreStepOuter}>
        <div className={styles.loreStepOuterInner}>
          <Svg html={sagaLoreOuterRaw} className={styles.fill} />
        </div>
      </div>
      <div className={styles.loreStepInner}>
        <div className={styles.loreStepInnerInner}>
          <Svg html={sagaLoreInnerRaw} className={styles.fill} />
        </div>
      </div>
      <span className={styles.loreStepText}>{numerals}</span>
    </div>
  )
}

function ChapterDivider() {
  return (
    <div className={styles.chapterDivider}>
      <div className={styles.chapterDividerInner}>
        <Svg html={sagaDividerRaw} className={styles.fill} />
      </div>
    </div>
  )
}

export default function SagaCard({
  cardName,
  manaCost,
  cardArt,
  typeLine,
  chapters,
  reminderText,
  cardNumber,
  totalCards,
  rarity,
  setCode,
  setSymbolUrl,
  language,
  artist,
  year,
}: SagaCardProps) {
  const { theme, textureUrl } = useCardTheme(manaCost)
  const { frameVars, fieldVars, borderVars } = getThemeVars(theme)

  return (
    <div className={styles.card}>
      {/* 1. Black border */}
      <div className={styles.borderBlack} />

      {/* 2. Frame texture + colored overlay */}
      <div className={styles.textureBg}>
        <img src={textureUrl} alt="" className={styles.textureImg} />
      </div>
      <Svg html={sagaColoredBgRaw} className={styles.coloredBg} style={frameVars} />

      {/* 3. Text box (left side) */}
      <div className={styles.textBox}>
        <div className={styles.textBoxBg} style={{ background: theme.text }} />
      </div>

      {/* 4. Card art (right side) */}
      <div className={styles.artFrame}>
        {cardArt && <img src={cardArt} alt={cardName} className={styles.artImg} />}
        <div className={styles.artShadow} />
      </div>

      {/* 5. Edge decorations */}
      <div className={styles.edgesBorder}>
        <div className={styles.edgesBorderInner}>
          <Svg html={sagaEdgesRaw} className={styles.fill} style={borderVars} />
        </div>
      </div>

      {/* 5b. Edge shadow */}
      <div className={styles.edgesShadow}>
        <div className={styles.edgesBorderInner}>
          <Svg html={sagaEdgesShadowRaw} className={styles.fill} />
        </div>
      </div>

      {/* 6. Saga banner (vertical left decoration) */}
      <div className={styles.banner}>
        <div className={styles.bannerReverse}>
          <Svg html={sagaBannerReverseRaw} className={styles.fill} />
        </div>
        <div className={styles.bannerBorder}>
          <div className={styles.bannerBorderInner}>
            <Svg html={sagaBannerBorderRaw} className={styles.fill} />
          </div>
        </div>
        <div className={styles.bannerColumn}>
          <Svg html={sagaBannerColumnRaw} className={styles.fill} />
        </div>
        <div className={styles.bannerSpike2}>
          <div className={styles.bannerSpike2Inner}>
            <Svg html={sagaBannerSpike2Raw} className={styles.fill} />
          </div>
        </div>
        <div className={styles.bannerSpike1}>
          <div className={styles.bannerSpike1Inner}>
            <Svg html={sagaBannerSpike1Raw} className={styles.fill} />
          </div>
        </div>
      </div>

      {/* 7. Name field */}
      <div className={styles.nameField}>
        <Svg html={nameFieldRaw} className={styles.fieldBgWrap} style={fieldVars} />
        <div className={styles.fieldShadow} />
      </div>

      {/* 8. Typeline field */}
      <div className={styles.typelineField}>
        <Svg html={typelineFieldRaw} className={styles.fieldBgWrap} style={fieldVars} />
        <div className={styles.fieldShadow} />
      </div>

      {/* 9. Card name text */}
      <div className={styles.cardName}>{cardName}</div>

      {/* 10. Mana cost */}
      <ManaCostRow manaCost={manaCost} className={styles.manaCost} />

      {/* 11. Type line text */}
      <div className={styles.typeLine}>{typeLine}</div>

      {/* 12. Set symbol */}
      <SetSymbolIcon
        className={styles.setSymbol}
        innerClassName={styles.setSymbolInner}
        fillClassName={styles.fill}
        setCode={setCode}
        rarity={rarity}
        setSymbolUrl={setSymbolUrl}
      />

      {/* 13. Chapter content */}
      <div className={styles.chaptersArea}>
        <div className={styles.chaptersInner}>
          {/* Reminder text */}
          <p className={styles.reminderText}>
            {reminderText ?? DEFAULT_REMINDER}
          </p>

          {/* Chapter steps */}
          <div className={styles.chapterSteps}>
            {chapters.map((chapter, i) => (
              <div key={i}>
                <ChapterDivider />
                <div className={styles.chapterRow}>
                  <LoreStep numerals={chapter.numerals} />
                  <span className={styles.chapterText}>{parseRulesText(chapter.text)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
