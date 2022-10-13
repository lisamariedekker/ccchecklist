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

export const bundles = [
  {
    id: 1,
    name: 'Spring Foraging',
    img: 'https://stardewvalleywiki.com/mediawiki/images/8/8a/Spring_Foraging_Bundle.png',
    reward: 'Spring Seeds x30',
    include: true,
    itemsRequired: 4, // possibly redundant attribute
    requirements: [
      {
        item: {
          id: 1,
          name: 'Wild Horseradish',
          season: ['Spring'],
          sprite: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png',
          source: ['Foraging', 'Spring Seeds'],
          type: 'Forage'
        },
        quantity: 1,
        quality: 'normal',
        completed: false,
      }, {
        item: {
          id: 2,
          name: 'Daffodil',
          season: ['Spring'],
          sprite: 'https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png',
          source: ['Foraging', 'Spring Seeds'],
          type: 'Forage'
        },
        quantity: 1,
        quality: 'normal',
        completed: false,
      }
    ]
  }, {
    id: 2,
    name: 'Summer Foraging',
    img: 'https://stardewvalleywiki.com/mediawiki/images/f/fd/Summer_Foraging_Bundle.png',
    reward: 'Summer Seeds x30',
    include: true,
    itemsRequired: 4, // possibly redundant attribute
    requirements: [],
  }
]

/**
 * ROOM
 *  BUNDLE
 *    REQUIREMENTS
 *      ITEMS 
 */