"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class Makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Makanan.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }
  Makanan.init(
    {
      makanan_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        field: "makanan_id",
        defaultValue: uuidv4(),
      },
      user_id: DataTypes.UUID,
      nama_makanan: DataTypes.STRING,
      jenis_makanan: DataTypes.STRING,
      kalori: DataTypes.DOUBLE,
      protein: DataTypes.DOUBLE,
      karbohidrat: DataTypes.DOUBLE,
      lemak: DataTypes.DOUBLE,
      takaran: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Makanan",
    }
  );
  return Makanan;
};
