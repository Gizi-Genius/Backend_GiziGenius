'use strict';
const { v4: uuidv4 } = require("uuid");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Resep.init(
    {
      resep_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        field: "resep_id",
        defaultValue: uuidv4(),
      },
      nama_resep: DataTypes.STRING,
      bahan_makanan: DataTypes.STRING,
      kalori: DataTypes.DOUBLE,
      protein: DataTypes.DOUBLE,
      lemak: DataTypes.DOUBLE,
      karbohidrat: DataTypes.DOUBLE,
      deskripsi: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Resep",
    }
  );
  return Resep;
};