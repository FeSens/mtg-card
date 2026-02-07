import { MtgCard } from './components/MtgCard'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Standard: Noncreature Spell (Enchantment, no P/T) */}
      <div className="card-showcase">
        <h3>Standard — Noncreature</h3>
        <MtgCard
          cardName="Control The Narrative"
          cardArt="public/Control_The_Narrative.png"
          manaCost={['0', 'W','B']}
          typeLine="Enchantment"
          rulesText="As Control The Narrative enters, choose two creature types.
Creatures of the first chosen type have protection from creatures of the second chosen type."
          flavorText="The Glimmer-Barge logs told stories the Synod refused to read. When the Unforged finally spoke, the chamber had already adjourned—permanently. — Sealed Testimony, Vault Record ██████"
          cardNumber="1"
          totalCards="291"
          rarity="R"
          setCode="EMA"
          language="EN"
          artist="Felipe Bonetto"
          year="2026"
        />
      </div>

      {/* Standard: Creature (with P/T) */}
      <div className="card-showcase">
        <h3>Standard — Creature</h3>
        <MtgCard
          cardName="Llanowar Elves"
          cardArt='public/Llanowar-Elves-MtG-Art.jpg'
          manaCost={['G']}
          typeLine="Creature — Elf Druid"
          rulesText="{T}: Add {G}."
          flavorText="As patient and generous as life, as harsh and merciless as nature."
          power="1"
          toughness="1"
          cardNumber="101"
          totalCards="136"
          rarity="C"
          setCode="GN3"
          language="EN"
          artist="Chris Rahn"
          year="2022"
        />
      </div>

      {/* Legendary Creature */}
      <div className="card-showcase">
        <h3>Legendary Creature</h3>
        <MtgCard
          cardName="Krenko, Mob Boss"
          manaCost={['2', 'R', 'R']}
          typeLine="Legendary Creature — Goblin Warrior"
          legendary
          rulesText="{T}: Create X 1/1 red Goblin creature tokens, where X is the number of Goblins you control."
          flavorText={`"It's not the size of the mob, it's the fury behind it."`}
          power="3"
          toughness="3"
          cardNumber="190"
          totalCards="291"
          rarity="R"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Guild / Multicolor */}
      <div className="card-showcase">
        <h3>Guild — Multicolor</h3>
        <MtgCard
          cardName="Assassin's Trophy"
          manaCost={['B', 'G']}
          typeLine="Instant"
          rulesText="Destroy target permanent an opponent controls. Its controller may search their library for a basic land card, put it onto the battlefield, then shuffle."
          flavorText={`"A reminder that nothing is untouchable."`}
          cardNumber="152"
          totalCards="291"
          rarity="R"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Gold 3+ Colors */}
      <div className="card-showcase">
        <h3>Gold — 3+ Colors</h3>
        <MtgCard
          cardName="Niv-Mizzet Reborn"
          manaCost={['W', 'U', 'B', 'R', 'G']}
          typeLine="Legendary Creature — Dragon Avatar"
          legendary
          rulesText="Flying
When Niv-Mizzet Reborn enters, reveal the top ten cards of your library. For each color pair, choose a card from among them, then put the rest on the bottom."
          power="6"
          toughness="6"
          cardNumber="208"
          totalCards="291"
          rarity="M"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Artifact Creature */}
      <div className="card-showcase">
        <h3>Artifact Creature</h3>
        <MtgCard
          cardName="Ornithopter"
          manaCost={['0']}
          typeLine="Artifact Creature — Thopter"
          rulesText="Flying"
          power="0"
          toughness="2"
          cardNumber="224"
          totalCards="291"
          rarity="C"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Planeswalker */}
      <div className="card-showcase">
        <h3>Planeswalker</h3>
        <MtgCard
          frame="planeswalker"
          cardName="Karn, Scion of Urza"
          manaCost={['4']}
          typeLine="Legendary Planeswalker — Karn"
          legendary
          loyaltyAbilities={[
            { cost: '+1', text: 'Reveal the top two cards of your library. An opponent chooses one. Put that card into your hand and the other into exile with a silver counter on it.' },
            { cost: '-1', text: 'Put a card you own in exile with a silver counter on it into your hand.' },
            { cost: '-5', text: 'Create a 0/0 colorless Construct artifact creature token with "This gets +1/+1 for each artifact you control."' },
          ]}
          startingLoyalty="5"
          cardNumber="154"
          totalCards="291"
          rarity="M"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Colored Planeswalker */}
      <div className="card-showcase">
        <h3>Planeswalker — Blue</h3>
        <MtgCard
          frame="planeswalker"
          cardName="Jace, the Mind Sculptor"
          manaCost={['2', 'U', 'U']}
          typeLine="Legendary Planeswalker — Jace"
          legendary
          loyaltyAbilities={[
            { cost: '+2', text: 'Look at the top card of target player\'s library. You may put that card on the bottom.' },
            { cost: '0', text: 'Draw three cards, then put two cards from your hand on top of your library.' },
            { cost: '-1', text: 'Return target creature to its owner\'s hand.' },
            { cost: '-12', text: 'Exile all cards from target player\'s library, then that player shuffles their hand into their library.' },
          ]}
          startingLoyalty="3"
          cardNumber="74"
          totalCards="291"
          rarity="M"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Saga */}
      <div className="card-showcase">
        <h3>Saga</h3>
        <MtgCard
          frame="saga"
          cardName="The Antiquities War"
          manaCost={['3', 'U']}
          typeLine="Enchantment — Saga"
          chapters={[
            { numerals: 'I', text: 'Look at the top five cards of your library. You may reveal up to two artifact cards. Put them into your hand and the rest on the bottom.' },
            { numerals: 'II', text: 'Artifacts you control become 5/5 creatures until end of turn.' },
            { numerals: 'III', text: 'Destroy all artifacts your opponents control.' },
          ]}
          cardNumber="42"
          totalCards="291"
          rarity="R"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Vehicle */}
      <div className="card-showcase">
        <h3>Vehicle</h3>
        <MtgCard
          frame="vehicle"
          cardName="Smuggler's Copter"
          manaCost={['2']}
          typeLine="Artifact — Vehicle"
          rulesText="Flying
Whenever Smuggler's Copter attacks or blocks, you may draw a card. If you do, discard a card.
Crew 1"
          power="3"
          toughness="3"
          cardNumber="235"
          totalCards="291"
          rarity="R"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Mutate */}
      <div className="card-showcase">
        <h3>Mutate</h3>
        <MtgCard
          frame="mutate"
          cardName="Gemrazer"
          manaCost={['3', 'G']}
          typeLine="Creature — Beast"
          rulesText="Mutate {1}{G}{G}
Reach, trample
Whenever this creature mutates, destroy target artifact or enchantment an opponent controls."
          power="4"
          toughness="4"
          cardNumber="155"
          totalCards="291"
          rarity="R"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Adventure */}
      <div className="card-showcase">
        <h3>Adventure</h3>
        <MtgCard
          frame="adventure"
          cardName="Bonecrusher Giant"
          manaCost={['2', 'R']}
          typeLine="Creature — Giant"
          rulesText="Whenever Bonecrusher Giant becomes the target of a spell, Bonecrusher Giant deals 2 damage to that spell's controller."
          flavorText="Not every tale ends in glory."
          adventureName="Stomp"
          adventureManaCost={['1', 'R']}
          adventureTypeLine="Instant — Adventure"
          adventureRulesText="Damage can't be prevented this turn. Stomp deals 2 damage to any target."
          power="4"
          toughness="3"
          cardNumber="115"
          totalCards="291"
          rarity="R"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Basic Land */}
      <div className="card-showcase">
        <h3>Basic Land</h3>
        <MtgCard
          frame="land"
          cardName="Mountain"
          manaCost={['R']}
          typeLine="Basic Land — Mountain"
          landSymbol="R"
          cardNumber="269"
          totalCards="291"
          rarity="C"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>

      {/* Nonbasic Land */}
      <div className="card-showcase">
        <h3>Nonbasic Land</h3>
        <MtgCard
          frame="land"
          cardName="Command Tower"
          manaCost={[]}
          typeLine="Land"
          rulesText="{T}: Add one mana of any color in your commander's color identity."
          cardNumber="281"
          totalCards="291"
          rarity="C"
          setCode="EMA"
          language="EN"
          artist="AI Artist"
          year="2026"
        />
      </div>
    </div>
  )
}

export default App
