"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
     return queryInterface.bulkInsert("Makanans", [
       {
         makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e6651",
         user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
         nama_makanan: "ote ote",
         jenis_makanan: "gorengan",
         kalori: 11.2,
         protein: 12.2,
         karbohidrat: 11,
         lemak: 200,
         takaran: 100,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
