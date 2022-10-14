const seasons = {
  SPRING: 'https://stardewvalleywiki.com/mediawiki/images/9/9c/Spring.png',
  SUMMER: 'https://stardewvalleywiki.com/mediawiki/images/8/85/Summer.png',
  FALL: 'https://stardewvalleywiki.com/mediawiki/images/5/5d/Fall.png',
  WINTER: 'https://stardewvalleywiki.com/mediawiki/images/a/a7/Winter.png'
}

const quality = {
  NORMAL: '',
  SILVER: '',
  GOLD: '',
  IRIDIUM: ''
}

const skills = {
  FARMING: 'Farming',
  FORAGING: 'Foraging',
  MINING: 'Mining',
  FISHING: 'Fishing',
  COMBAT: 'Combat'
}

const itemTypes = {
  FORAGE: 'Forage',
  FRUIT: 'Fruit',
  VEGETABLE: 'Vegetable',
  ARTISAN_GOODS: 'Artisan goods'
}

const rooms = [
  {
    id: 1,
    name: 'Crafts Room',
    bundles: [],
    reward: ''
  }
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
        id: 1,
        item: {
          id: 1,
          name: 'Wild Horseradish',
          season: [seasons.SPRING],
          sprite: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png',
          source: ['Foraging', 'Spring Seeds'],
          type: itemTypes.FORAGE
        },
        quantity: 1,
        quality: 'normal',
        completed: false,
      }, {
        id: 2,
        item: {
          id: 2,
          name: 'Daffodil',
          season: [seasons.SPRING],
          sprite: 'https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png',
          source: ['Foraging', 'Spring Seeds'],
          type: itemTypes.FORAGE
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
    requirements: [
      {
        id: 1,
        item: {
          id: 1,
          name: 'Sweet Pea',
          season: [seasons.SUMMER],
          sprite: '',
          source: ['Foraging', 'Summer Seeds'],
          type: itemTypes.FORAGE
        },
        quantity: 1,
        quality: 'normal',
        completed: false,
      }
    ],
  }
]

/**
 * ROOM
 *  BUNDLE
 *    REQUIREMENTS
 *      ITEMS 
 */