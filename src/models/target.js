'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class target extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  target.init({
    target_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "target_id"
    },
    user_id: DataTypes.INTEGER,
    karbohidrat: DataTypes.DOUBLE,
    protein: DataTypes.DOUBLE,
    lemak: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'target',
  });
  return target;
};