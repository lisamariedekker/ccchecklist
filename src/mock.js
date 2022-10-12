const seasons = [
  { SPRING: 'Spring' },
  { SUMMER: 'Summer' },
  { FALL: ' Fall' },
  { WINTER: 'Winter' }
]

const skills = [
  { FARMING: 'Farming' },
  { FORAGING: 'Foraging' },
  { MINING: 'Mining' },
  { FISHING: 'Fishing' },
  { COMBAT: 'Combat' }
]

const itemTypes = [
  { FORAGE: 'Forage' }
]

export const items = [
  {
    id: 1,
    name: 'Wild Horseradish',
    season: ['Spring'],
    sprite: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png',
    source: ['Foraging', 'Spring Seeds'],
    type: 'Forage'
  }, {
    id: 2,
    name: 'Daffodil',
    season: ['Spring'],
    sprite: 'https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png',
    source: ['Foraging', 'Spring Seeds'],
    type: 'Forage'
  }
]