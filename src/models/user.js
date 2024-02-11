`use strict`;
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "user_id",
        defaultValue: uuidv4(),
      },
      uid: DataTypes.STRING,
      fcm_token: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      photo: DataTypes.STRING,
      olahraga: DataTypes.STRING,
      gender: DataTypes.STRING,
      berat_badan: DataTypes.DOUBLE,
      target: DataTypes.STRING,
      tinggi_badan: DataTypes.INTEGER,
      umur: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users",
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
          }
        },
        beforeUpdate: async (user) => {
          if (user.changed("password")) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
          }
        },
      },
    }
  );
  return Users;
};