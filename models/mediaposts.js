'use strict'
module.exports = function (sequelize, DataTypes) {
  var MediaPosts = sequelize.define('MediaPosts', {
    MediumId: DataTypes.INTEGER,
    PostId: DataTypes.INTEGER,
    loadSequence: DataTypes.INTEGER,
    caption: DataTypes.STRING
  })
  return MediaPosts
}