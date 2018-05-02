'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    var seedArr = []
    // seedArr.push({
    //   MediumId: 1,
    //   PostId: 1,
    //   loadSequence: 1,
    //   caption: 'The Residence of the Domai Lama'
    // })
    // seedArr.push({
    //   MediumId: 2,
    //   PostId: 1,
    //   loadSequence: 2,
    //   caption: 'Domai Lama and his Cow'
    // })
    // seedArr.push({
    //   MediumId: 3,
    //   PostId: 1,
    //   loadSequence: 3,
    //   caption: 'Domai Lama and his Dog'
    // })
    // seedArr.push({
    //   MediumId: 4,
    //   PostId: 1,
    //   loadSequence: 4,
    //   caption: 'Domai Lama and his Elephant'
    // })
    // seedArr.push({
    //   MediumId: 5,
    //   PostId: 1,
    //   loadSequence: 5,
    //   caption: 'Domai Lama and his Mother'
    // })
    // seedArr.push({
    //   MediumId: 6,
    //   PostId: 1,
    //   loadSequence: 6,
    //   caption: 'Domai Lama\'s Birthplace'
    // })
    // seedArr.push({
    //   MediumId: 7,
    //   PostId: 1,
    //   loadSequence: 7,
    //   caption: 'seeded caption'
    // })
    // seedArr.push({
    //   MediumId: 8,
    //   PostId: 1,
    //   loadSequence: 8,
    //   caption: 'seeded caption'
    // })
    // seedArr.push({
    //   MediumId: 9,
    //   PostId: 1,
    //   loadSequence: 9,
    //   caption: 'seeded caption'
    // })
    // seedArr.push({
    //   MediumId: 10,
    //   PostId: 1,
    //   loadSequence: 10,
    //   caption: 'seeded caption'
    // })
    // seedArr.push({
    //   MediumId: 11,
    //   PostId: 1,
    //   loadSequence: 11,
    //   caption: 'seeded caption'
    // })
    // seedArr.push({
    //   MediumId: 12,
    //   PostId: 1,
    //   loadSequence: 12,
    //   caption: 'seeded caption'
    // })
    // seedArr.push({
    //   MediumId: 13,
    //   PostId: 1,
    //   loadSequence: 13,
    //   caption: 'seeded caption'
    // })
    // seedArr.push({
    //   MediumId: 1,
    //   PostId: 2,
    //   loadSequence: 1,
    //   caption: 'POST 2 SEED PHOTO MEDIUM 1'
    // })
    for (var i = 0; i < 10; i++) {
      for (var j = 1; j <= 10; j++) {
        seedArr.push({
          MediumId: j,
          PostId: (3 * i) + 1,
          loadSequence: j,
          caption: `Seeded caption ${j}`
        })
      }
      seedArr.push({
        MediumId: 1,
        PostId: (3 * i) + 2,
        loadSequence: 1,
        caption: `Seeded caption`
      })
    }

    return queryInterface.bulkInsert('MediaPosts', seedArr, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MediaPosts', null, {})
  }
}
