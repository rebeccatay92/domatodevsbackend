'use strict'
const casual = require('casual')
const faker = require('faker')

module.exports = {
  up: function (queryInterface, Sequelize) {
    var seedArr = []
    for (var i = 1; i <= 50; i++) {
      seedArr.push({
        ItineraryId: i,
        DepartureLocationId: i,
        ArrivalLocationId: Math.floor(Math.random() * 50) + 1,
        departureTerminal: `Terminal ${Math.floor(Math.random() * 4) + 1}`,
        departureGate: `Gate ${Math.floor(Math.random() * 10) + 1}`,
        arrivalTerminal: `Terminal ${Math.floor(Math.random() * 4) + 1}`,
        arrivalGate: `Gate ${Math.floor(Math.random() * 10) + 1}`,
        departureLoadSequence: 1,
        arrivalLoadSequence: 1,
        departureDate: (new Date(casual.date()).getTime() / 1000).toFixed(0),
        arrivalDate: (new Date(casual.date()).getTime() / 1000).toFixed(0),
        departureTime: (new Date(casual.date()).getTime() / 1000).toFixed(0),
        boardingTime: (new Date(casual.date()).getTime() / 1000).toFixed(0),
        arrivalTime: (new Date(casual.date()).getTime() / 1000).toFixed(0),
        name: `Airport ${i}`,
        notes: casual.sentences(3),
        cost: (Math.floor(Math.random() * 20) + 1) * 100,
        currency: casual.currency_code,
        bookingStatus: true,
        bookedThrough: faker.internet.url(),
        bookingConfirmation: faker.internet.url(),
        attachment: faker.internet.avatar(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Flights', seedArr, {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Flights', null, {})
  }
}
