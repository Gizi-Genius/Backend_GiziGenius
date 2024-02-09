'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roles.init({
    roles_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "roles_id",
      defaultValue: uuidv4()
    },
    role_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return roles;
};