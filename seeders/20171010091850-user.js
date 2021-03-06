'use strict'
// const countries = require('../data/countries.json')

module.exports = {
  up: function (queryInterface, Sequelize) {
    var user1 = {
      id: 'auth0|5ab1dce98bd5067ff5786507',
      fullName: 'domatodevs@gmail.com',
      username: 'domatodevs',
      email: 'domatodevs@gmail.com',
      profilePic: 'https://s.gravatar.com/avatar/51e8e59034a4c4e3cc4ae0256c196739?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fdo.png',
      CountryId: 200,
      bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lorem non odio ornar.`,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    var user2 = {
      id: 'auth0|5ab4b2d6ed63ab65463de279',
      fullName: 'dominikphua@gmail.com',
      username: 'dominikphua',
      email: 'dominikphua@gmail.com',
      profilePic: 'https://s.gravatar.com/avatar/39afacdaa6023f449298dacfd80d7f56?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fdo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    var user3 = {
      id: 'auth0|5ab4b384ecd90e026325304c',
      fullName: 'yangtheng92@gmail.com',
      username: 'godlyyt',
      email: 'yangtheng92@gmail.com',
      profilePic: 'https://s.gravatar.com/avatar/f2fe2f923a5170a04f8aec9850b3d983?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fya.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    var user4 = {
      id: 'auth0|5b3b5066f2e63b278002c71b',
      fullName: 'rebeccatay92@gmail.com',
      username: 'rebeccatay92',
      email: 'rebeccatay92@gmail.com',
      profilePic: 'https://s.gravatar.com/avatar/ad0ef8b709db70ebecb19fbb39588616?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fre.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return queryInterface.bulkInsert('Users', [user1, user2, user3, user4], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
