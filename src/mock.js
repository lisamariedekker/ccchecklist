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

export const data = [
  {
    id: 1,
    name: 'Crafts Room',
    reward: 'Bridge Repair',
    imgIncomplete: '',
    imgComplete: '',
    bundles: [
      {
        id: 1,
        name: 'Spring Foraging',
        img: 'https://stardewvalleywiki.com/mediawiki/images/8/8a/Spring_Foraging_Bundle.png',
        reward: 'Spring Seeds x30',
        include: true,
        itemsRequired: 4,
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
          }, {
            id: 3,
            item: {
              id: 3,
              name: 'Leek',
              season: [seasons.SPRING],
              sprite: 'https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png',
              source: ['Foraging', 'Spring Seeds'],
              type: itemTypes.FORAGE
            },
            quantity: 1,
            quality: 'normal',
            completed: false,
          }, {
            id: 4,
            item: {
              id: 4,
              name: 'Dandelion',
              season: [seasons.SPRING],
              sprite: 'https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png',
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
        itemsRequired: 4,
        requirements: [
          {
            id: 1,
            item: {
              id: 1,
              name: 'Grape',
              season: [seasons.SUMMER, seasons.FALL],
              sprite: 'https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png',
              source: ['Foraging', 'Summer Seeds', 'Grape Starter'],
              type: itemTypes.FRUIT
            },
            quantity: 1,
            quality: 'normal',
            completed: false,
          }, {
            id: 2,
            item: {
              id: 2,
              name: 'Spice Berry',
              season: [seasons.SUMMER],
              sprite: 'https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png',
              source: ['Foraging', 'Summer Seeds'],
              type: itemTypes.FORAGE
            },
            quantity: 1,
            quality: 'normal',
            completed: false,
          }, {
            id: 3,
            item: {
              id: 3,
              name: 'Sweet Pea',
              season: [seasons.SUMMER],
              sprite: 'https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png',
              source: ['Foraging', 'Summer Seeds'],
              type: itemTypes.FORAGE
            },
            quantity: 1,
            quality: 'normal',
            completed: false,
          },
        ],
      }
    ]
  }, {
    id: 2,
    name: 'Pantry',
    reward: 'Greenhouse',
    imgIncomplete: '',
    imgComplete: '',
    bundles: []
  }, {
    id: 3,
    name: 'Fish Tank',
    reward: 'Glittering Boulder Removed',
    imgIncomplete: '',
    imgComplete: '',
    bundles: []
  }, {
    id: 4,
    name: 'Boiler Room',
    reward: 'Minecarts Repaired',
    imgIncomplete: '',
    imgComplete: '',
    bundles: []
  }, {
    id: 5,
    name: 'Bulletin Board',
    reward: 'Friendship',
    imgIncomplete: '',
    imgComplete: '',
    bundles: []
  }, {
    id: 6,
    name: 'Vault',
    reward: 'Bus Repair',
    imgIncomplete: '',
    imgComplete: '',
    bundles: []
  }, {
    id: 7,
    name: 'Abandoned JojaMart',
    reward: 'Movie Theater',
    imgIncomplete: '',
    imgComplete: '',
    bundles: []
  },
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