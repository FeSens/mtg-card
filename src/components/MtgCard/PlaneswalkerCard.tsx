import type { PlaneswalkerCardProps } from './types'
import styles from './PlaneswalkerCard.module.css'
import { Svg, useCardTheme, getThemeVars, ManaCostRow, SetSymbolIcon, Metadata, Copyright, parseRulesText } from './shared'

// Inline SVGs (rendered as DOM nodes so CSS custom properties inherit)
import pwColoredBgRaw from '../../assets/pw-colored-bg.svg?raw'
import pwBorderRaw from '../../assets/pw-border.svg?raw'
import pwNameFieldRaw from '../../assets/pw-name-field.svg?raw'
import pwTextboxRaw from '../../assets/pw-textbox.svg?raw'
import pwLoyaltyOuterRaw from '../../assets/pw-loyalty-outer.svg?raw'
import pwLoyaltyInnerRaw from '../../assets/pw-loyalty-inner.svg?raw'
import pwAbilityPlusOuterRaw from '../../assets/pw-ability-plus-outer.svg?raw'
import pwAbilityPlusInnerRaw from '../../assets/pw-ability-plus-inner.svg?raw'
import pwAbilityMinusOuterRaw from '../../assets/pw-ability-minus-outer.svg?raw'
import pwAbilityMinusInnerRaw from '../../assets/pw-ability-minus-inner.svg?raw'

function isMinusAbility(cost: string): boolean {
  const trimmed = cost.trim()
  return trimmed.startsWith('-') || trimmed.startsWith('\u2212')
}

function LoyaltyBadge({ cost }: { cost: string }) {
  const minus = isMinusAbility(cost)

  if (minus) {
    return (
      <div className={`${styles.loyaltyBadge} ${styles.loyaltyBadgeMinus}`}>
        <div className={styles.loyaltyBadgeOuter}>
          <div className={styles.loyaltyBadgeMinusFlip}>
            <div className={styles.loyaltyBadgeOuterInner}>
              <Svg html={pwAbilityMinusOuterRaw} className={styles.fill} />
            </div>
          </div>
        </div>
        <div className={styles.loyaltyBadgeInner}>
          <div className={styles.loyaltyBadgeMinusFlip}>
            <div className={styles.loyaltyBadgeInnerInner}>
              <Svg html={pwAbilityMinusInnerRaw} className={styles.fill} />
            </div>
          </div>
        </div>
        <span className={styles.loyaltyBadgeCost}>{cost}</span>
        <span className={styles.loyaltyBadgeColon}>:</span>
      </div>
    )
  }

  return (
    <div className={styles.loyaltyBadge}>
      <div className={styles.loyaltyBadgeOuter}>
        <div className={styles.loyaltyBadgeOuterInner}>
          <Svg html={pwAbilityPlusOuterRaw} className={styles.fill} />
        </div>
      </div>
      <div className={styles.loyaltyBadgeInner}>
        <div className={styles.loyaltyBadgeInnerInner}>
          <Svg html={pwAbilityPlusInnerRaw} className={styles.fill} />
        </div>
      </div>
      <span className={styles.loyaltyBadgeCost}>{cost}</span>
      <span className={styles.loyaltyBadgeColon}>:</span>
    </div>
  )
}

export default function PlaneswalkerCard({
  cardName,
  manaCost,
  cardArt,
  typeLine,
  loyaltyAbilities,
  startingLoyalty,
  cardNumber,
  totalCards,
  rarity,
  setCode,
  setSymbolUrl,
  language,
  artist,
  year,
}: PlaneswalkerCardProps) {
  const { theme, textureUrl } = useCardTheme(manaCost)
  const { frameVars, fieldVars } = getThemeVars(theme)

  return (
    <div className={styles.card}>
      {/* 1. Black border */}
      <div className={styles.borderBlack} />

      {/* 2. Frame texture + colored overlay */}
      <div className={styles.textureBg}>
        <img src={textureUrl} alt="" className={styles.textureImg} />
      </div>
      <Svg html={pwColoredBgRaw} className={styles.coloredBg} style={frameVars} />

      {/* 3. Card art (full bleed behind frame) */}
      <div className={styles.artFrame}>
        {cardArt && <img src={cardArt} alt={cardName} className={styles.artImg} />}
        <div className={styles.artShadow} />
      </div>

      {/* 4. Text box for abilities */}
      <div className={styles.textBox}>
        <Svg html={pwTextboxRaw} className={styles.textBoxBg} style={{ '--fill-0': theme.text } as React.CSSProperties} />
        <div className={styles.textBoxDarker} />
      </div>

      {/* 5. Edge border (pw-border.svg uses --fill-0, not --stroke-0) */}
      <div className={styles.edgesBorder}>
        <Svg html={pwBorderRaw} className={styles.edgesBorderInner} style={{ '--fill-0': theme.border } as React.CSSProperties} />
      </div>

      {/* 6. Name field */}
      <div className={styles.nameField}>
        <Svg html={pwNameFieldRaw} className={styles.fieldBgWrap} style={fieldVars} />
        <div className={styles.fieldShadow} />
      </div>

      {/* 7. Typeline field */}
      <div className={styles.typelineField}>
        <Svg html={pwNameFieldRaw} className={styles.fieldBgWrap} style={fieldVars} />
        <div className={styles.fieldShadow} />
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

      {/* 12. Loyalty abilities */}
      <div className={styles.abilitiesArea}>
        {loyaltyAbilities.map((ability, i) => (
          <div key={i} className={styles.abilityRow}>
            <LoyaltyBadge cost={ability.cost} />
            <span className={styles.abilityText}>{parseRulesText(ability.text)}</span>
          </div>
        ))}
      </div>

      {/* 13. Loyalty counter */}
      <div className={styles.loyaltyCounter}>
        <div className={styles.loyaltyOuter}>
          <div className={styles.loyaltyOuterInner}>
            <Svg html={pwLoyaltyOuterRaw} className={styles.fill} />
          </div>
        </div>
        <div className={styles.loyaltyInner}>
          <div className={styles.loyaltyInnerInner}>
            <Svg html={pwLoyaltyInnerRaw} className={styles.fill} />
          </div>
        </div>
        <span className={styles.loyaltyText}>{startingLoyalty}</span>
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
