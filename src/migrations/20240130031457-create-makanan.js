'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Makanans', {
      makanan_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      nama_makanan: {
        type: Sequelize.STRING
      },
      jenis_makanan: {
        type: Sequelize.STRING
      },
      kalori: {
        type: Sequelize.DOUBLE
      },
      protein: {
        type: Sequelize.DOUBLE
      },
      karbohidrat: {
        type: Sequelize.DOUBLE
      },
      lemak: {
        type: Sequelize.DOUBLE
      },
      takaran: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Makanans');
  }
};