'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }
  Task.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    isDone: {
      field: 'is_done',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    deadline: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    underscored: true
  });
  return Task;
};


/* Як створити зв'язок між моделями?

+ 1. На рівні таблиць (міграції) мати стовпці з зовнішнім ключем (implement foreign key)
+ 2. Прописати асоціації (зв'язки) на рівні моделей (метод associate в моделі)

*/