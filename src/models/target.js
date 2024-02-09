'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class Target extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Target.init({
    target_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "target_id",
      defaultValue: uuidv4()
    },
    user_id: DataTypes.INTEGER,
    karbohidrat: DataTypes.DOUBLE,
    protein: DataTypes.DOUBLE,
    lemak: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Target',
  });
  return Target;
};