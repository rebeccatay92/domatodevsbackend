'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    var seedArr = []
    for (var i = 1; i <= 10; i++) {
      seedArr.push({
        name: `Itinerary ${i}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu nisl, maximus vitae velit eu, tempus euismod diam. In ut pretium augue. Etiam convallis laoreet metus',
        days: Math.floor(Math.random() * 4) + 3,
        startDate: 1534291200, // 15th aug 2018 wed gmt 0.
        isPrivate: false,
        createdAt: new Date(2018, 4, i + 1),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Itineraries', seedArr, {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Itineraries', null, {})
  }
}
