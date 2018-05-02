'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    var seedArr = []
    for (var i = 1; i <= 10; i++) {
      seedArr.push({
        MediumId: Math.floor(Math.random() * 10) + 1,
        BlogId: i,
        loadSequence: 1,
        caption: 'MediaBlog caption1'
      })
      seedArr.push({
        MediumId: Math.floor(Math.random() * 10) + 1,
        BlogId: i,
        loadSequence: 2,
        caption: 'MediaBlog caption2'
      })
      seedArr.push({
        MediumId: Math.floor(Math.random() * 10) + 1,
        BlogId: i,
        loadSequence: 3,
        caption: 'MediaBlog caption3'
      })
    }
    return queryInterface.bulkInsert('MediaBlogs', seedArr, {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('MediaBlogs', null, {})
  }
}
