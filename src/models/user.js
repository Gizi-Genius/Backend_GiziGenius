`use strict`;
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "user_id"
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    olahraga: DataTypes.STRING,
    gender: DataTypes.STRING,
    berat_badan: DataTypes.DOUBLE,
    target: DataTypes.STRING,
    tinggi_badan: DataTypes.INTEGER,
    umur: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};