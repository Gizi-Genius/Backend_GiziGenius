'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  makanan.init({
    makanan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "makanan_id"
    },
    user_id: DataTypes.INTEGER,
    nama_makanan: DataTypes.STRING,
    jenis_makanan: DataTypes.STRING,
    kalori: DataTypes.DOUBLE,
    protein: DataTypes.DOUBLE,
    karbohidrat: DataTypes.DOUBLE,
    lemak: DataTypes.DOUBLE,
    takaran: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'makanan',
  });
  return makanan;
};