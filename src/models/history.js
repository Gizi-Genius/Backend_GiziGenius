'use strict';
const {
  Model
} = require('sequelize');
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
      field: "history_id"
    },
    user_id: DataTypes.INTEGER,
    log_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'history',
  });
  return history;
};