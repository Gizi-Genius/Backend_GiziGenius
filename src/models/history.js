'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  history.init({
    history_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "history_id",
      defaultValue: uuidv4()
    },
    user_id: DataTypes.INTEGER,
    log_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'history',
  });
  return history;
};