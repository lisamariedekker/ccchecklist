const seasons = {
  SPRING: './sprites/Spring',
  SUMMER: 'https://stardewvalleywiki.com/mediawiki/images/8/85/Summer.png',
  FALL: 'https://stardewvalleywiki.com/mediawiki/images/5/5d/Fall.png',
  WINTER: 'https://stardewvalleywiki.com/mediawiki/images/a/a7/Winter.png'
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
  ARTISAN_GOODS: 'Artisan goods',
  MINERAL: 'Mineral'
}

const rooms = [
  {
    id: 1,
    name: 'Crafts Room',
    reward: 'Bridge Repair',
    imgIncomplete: '',
    imgComplete: '',
    bundles: ['Spring Foraging', 'Summer Foraging', 'Fall Foraging', 'Winter Foraging', 'Construction', 'Exotic Foraging']
  }, {
    id: 2,
    name: 'Pantry',
    reward: 'Greenhouse',
    imgIncomplete: '',
    imgComplete: '',
    bundles: ['Spring Crops', 'Summer Crops', 'Fall Crops', 'Quality Crops', 'Animal', 'Artisan']
  }, {
    id: 3,
    name: 'Fish Tank',
    reward: 'Glittering Boulder Removed',
    imgIncomplete: '',
    imgComplete: '',
    bundles: ['River Fish', 'Lake Fish', 'Ocean Fish', 'Night Fishing', 'Crab Pot', 'Specialty Fish']
  }, {
    id: 4,
    name: 'Boiler Room',
    reward: 'Minecarts Repaired',
    imgIncomplete: '',
    imgComplete: '',
    bundles: ['Blacksmith\'s', 'Geologist\'s', 'Adventurer\'s']
  }, {
    id: 5,
    name: 'Bulletin Board',
    reward: 'Friendship',
    imgIncomplete: '',
    imgComplete: '',
    bundles: ['Chef\'s', 'Dye', 'Field Research', 'Fodder', 'Enchanter\'s']
  }, {
    id: 6,
    name: 'Vault',
    reward: 'Bus Repair',
    imgIncomplete: '',
    imgComplete: '',
    bundles: ['2.500', '5.000', '10.000', '25.000']
  }, {
    id: 7,
    name: 'Abandoned JojaMart',
    reward: 'Movie Theater',
    imgIncomplete: '',
    imgComplete: '',
    bundles: ['The Missing']
  }
]

const bundles = [
  {
    id: 8,
    name: 'Spring Foraging',
    img: 'https://stardewvalleywiki.com/mediawiki/images/8/8a/Spring_Foraging_Bundle.png',
    reward: 'Spring Seeds x30',
    include: true,
    itemsRequired: 4,
    room: 1,
    options: []
  }, {
    id: 9,
    name: 'Summer Foraging',
    img: 'https://stardewvalleywiki.com/mediawiki/images/f/fd/Summer_Foraging_Bundle.png',
    reward: 'Summer Seeds x30',
    include: true,
    itemsRequired: 4,
    room: 1,
    options: []
  }, {
    id: 10,
    name: 'Fall Foraging',
    img: '',
    reward: 'Fall Seeds x30',
    include: true,
    itemsRequired: 4,
    room: 1,
    options: []
  }, {
    id: 11,
    name: 'Winter Foraging',
    img: '',
    reward: 'Winter Seeds x30',
    include: true,
    itemsRequired: 4,
    room: 1,
    options: []
  }, {
    id: 12,
    name: 'Construction',
    img: '',
    reward: 'Charcoal Kiln',
    include: true,
    itemsRequired: 4,
    room: 1,
    options: []
  }, {
    id: 13,
    name: 'Exotic Foraging',
    img: '',
    reward: 'Autumn\'s Bounty x30',
    include: true,
    itemsRequired: 5,
    room: 1,
    options: []
  }, {
    id: 14,
    name: 'Spring Crops',
    img: '',
    reward: 'Speed-Gro x20',
    include: true,
    itemsRequired: 4,
    room: 2,
    options: []
  }, {
    id: 15,
    name: 'Summer Crops',
    img: '',
    reward: 'Quality Sprinkler',
    include: true,
    itemsRequired: 4,
    room: 2,
    options: []
  }, {
    id: 16,
    name: 'Fall Crops',
    img: '',
    reward: 'Bee House',
    include: true,
    itemsRequired: 4,
    room: 2,
    options: []
  }, {
    id: 17,
    name: 'Quality Crops',
    img: '',
    reward: 'Preserves Jar',
    include: true,
    itemsRequired: 3,
    room: 2,
    options: []
  }, {
    id: 18,
    name: 'Animal',
    img: '',
    reward: 'Cheese Press',
    include: true,
    itemsRequired: 5,
    room: 2,
    options: []
  }, {
    id: 19,
    name: 'Artisan',
    img: '',
    reward: 'Keg',
    include: true,
    itemsRequired: 6,
    room: 2,
    options: []
  }, {
    id: 20,
    name: 'River Fish',
    img: '',
    reward: 'Bait x30',
    include: true,
    itemsRequired: 4,
    room: 3,
    options: []
  }, {
    id: 21,
    name: 'Lake Fish',
    img: '',
    reward: 'Dressed Spinner',
    include: true,
    itemsRequired: 4,
    room: 3,
    options: []
  }, {
    id: 22,
    name: 'Ocean Fish',
    img: '',
    reward: 'Warp Totem: Beach',
    include: true,
    itemsRequired: 4,
    room: 3,
    options: []
  }, {
    id: 23,
    name: 'Night Fishing',
    img: '',
    reward: 'Small Glow Ring',
    include: true,
    itemsRequired: 3,
    room: 3,
    options: []
  }, {
    id: 24,
    name: 'Crab Pot',
    img: '',
    reward: 'Crab Pot x3',
    include: true,
    itemsRequired: 5,
    room: 3,
    options: []
  }, {
    id: 25,
    name: 'Specialty Fish',
    img: '',
    reward: 'Dish \'O The Sea',
    include: true,
    itemsRequired: 4,
    room: 3,
    options: []
  }, {
    id: 26,
    name: 'Blacksmith\'s',
    img: '',
    reward: 'Furnace',
    include: true,
    itemsRequired: 3,
    room: 4,
    options: []
  }, {
    id: 27,
    name: 'Geologist\'s',
    img: '',
    reward: 'Omni Geode x5',
    include: true,
    itemsRequired: 4,
    room: 4,
    options: []
  }, {
    id: 28,
    name: 'Adventurer\'s',
    img: '',
    reward: 'Small Magnet Ring',
    include: true,
    itemsRequired: 2,
    room: 4,
    options: []
  }, {
    id: 29,
    name: 'Chef\'s',
    img: '',
    reward: 'Pink Cake x3',
    include: true,
    itemsRequired: 6,
    room: 5,
    options: []
  }, {
    id: 30,
    name: 'Dye',
    img: '',
    reward: 'Seed Maker',
    include: true,
    itemsRequired: 6,
    room: 5,
    options: []
  }, {
    id: 31,
    name: 'Field Research',
    img: '',
    reward: 'Recycling Machine',
    include: true,
    itemsRequired: 4,
    room: 5,
    options: []
  }, {
    id: 32,
    name: 'Fodder',
    img: '',
    reward: 'Heater',
    include: true,
    itemsRequired: 3,
    room: 5,
    options: []
  }, {
    id: 33,
    name: 'Enchanter\'s',
    img: '',
    reward: 'Gold Bar x5',
    include: true,
    itemsRequired: 4,
    room: 5,
    options: []
  }, {
    id: 34,
    name: '2.500',
    img: '',
    reward: 'Chocolate Cake x3',
    include: true,
    itemsRequired: 1,
    room: 6,
    options: []
  }, {
    id: 35,
    name: '5.000',
    img: '',
    reward: 'Quality Fertilizer x30',
    include: true,
    itemsRequired: 1,
    room: 6,
    options: []
  }, {
    id: 36,
    name: '10.000',
    img: '',
    reward: 'Lightning Rod',
    include: true,
    itemsRequired: 1,
    room: 6,
    options: []
  }, {
    id: 37,
    name: '25.000',
    img: '',
    reward: 'Crystalarium',
    include: true,
    itemsRequired: 1,
    room: 6,
    options: []
  }, {
    id: 38,
    name: 'The Missing',
    img: '',
    reward: '',
    include: true,
    itemsRequired: 5,
    room: 7,
    options: []
  },
]

// Not really a join table, but sort of
const options = [
  {
    id: 39,
    quantity: 1,
    quality: 'normal',
    completed: false,
    bundle: 1,
    item: '' // reference item id
  }
]

const items = [
  {
    id: 1,
    name: 'Wild Horseradish',
    season: [seasons.SPRING],
    sprite: '',
    source: ['Foraging', 'Spring Seeds'],
    type: itemTypes.FORAGE
  }, {
    id: 2,
    name: 'Daffodil',
    season: [seasons.SPRING],
    sprite: '',
    source: ['Foraging', 'Spring Seeds'],
    type: itemTypes.FORAGE
  }, {
    id: 3,
    name: 'Leek',
    season: [seasons.SPRING],
    sprite: '',
    source: ['Foraging', 'Spring Seeds'],
    type: itemTypes.FORAGE
  }, {
    id: 4,
    name: 'Dandelion',
    season: [seasons.SPRING],
    sprite: '',
    source: ['Foraging', 'Spring Seeds'],
    type: itemTypes.FORAGE
  },
]