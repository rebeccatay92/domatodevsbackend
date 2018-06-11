'use strict'
module.exports = function (sequelize, DataTypes) {
  var MediaBlogs = sequelize.define('MediaBlogs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    MediumId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Media'
        },
        key: 'id'
      }
    },
    BlogId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Blogs'
        },
        key: 'id'
      }
    },
    loadSequence: {
      type: DataTypes.INTEGER
    },
    caption: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  })

  // MediaBlogs.associate = function (models) {
  //   MediaBlogs.belongsTo(models.Medium, {
  //     foreignKey: 'MediumId'
  //   })
  //   MediaBlogs.belongsTo(models.Blog, {
  //     foreignKey: 'BlogId'
  //   })
  // }

  return MediaBlogs
}
