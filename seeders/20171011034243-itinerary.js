'use strict'
const casual = require('casual')
const faker = require('faker')

module.exports = {
  up: function (queryInterface, Sequelize) {
    var seedArr = []
    for (var i = 1; i <= 50; i++) {
      seedArr.push({
        name: `Itinerary ${i}`,
        startDate: casual.date(),
        endDate: casual.date(),
        pax: Math.floor(Math.random() * 4) + 1,
        budget: (Math.floor(Math.random() * 8) + 2) * 1000,
        travelInsurance: faker.internet.url(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Itineraries', seedArr, {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Itineraries', null, {})
  }
}