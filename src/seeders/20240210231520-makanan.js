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
        nama_makanan: "Nasi Putih Matang",
        jenis_makanan: "Makanan Pokok",
        kalori: 126,
        protein: 3,
        karbohidrat: 28,
        lemak: 0,
        takaran: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e2251",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Telur Ayam",
        jenis_makanan: "Makanan Pokok",
        kalori: 75,
        protein: 6,
        karbohidrat: 1,
        lemak: 5,
        takaran: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e2252",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Abon Ikan",
        jenis_makanan: "Makanan Pokok",
        kalori: 435,
        protein: 27,
        karbohidrat: 36,
        lemak: 20,
        takaran: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e2253",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Dada Ayam Goreng",
        jenis_makanan: "Makanan Pokok",
        kalori: 288,
        protein: 34,
        karbohidrat: 0,
        lemak: 17,
        takaran: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e2254",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Paha Ayam",
        jenis_makanan: "Makanan Pokok",
        kalori: 274,
        protein: 36,
        karbohidrat: 1,
        lemak: 14,
        takaran: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e2255",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Usus Ayam Goreng",
        jenis_makanan: "Makanan Pokok",
        kalori: 473,
        protein: 45,
        karbohidrat: 14,
        lemak: 26,
        takaran: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e2266",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Daging sapi (Lemak lumayan banyak)",
        jenis_makanan: "Makanan Pokok",
        kalori: 210,
        protein: 19,
        karbohidrat: 0,
        lemak: 14,
        takaran: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e2262",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Daging Ayam mentah",
        jenis_makanan: "Makanan Pokok",
        kalori: 134,
        protein: 20,
        karbohidrat: 0,
        lemak: 6,
        takaran: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f13e2233",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Daging Babi Mentah",
        jenis_makanan: "Makanan Pokok",
        kalori: 453,
        protein: 12,
        karbohidrat: 0,
        lemak: 45,
        takaran: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        makanan_id: "03138c85-4fce-4c7d-9ac5-a143f14e6233",
        user_id: "688b119f-ff08-4eb2-a70d-f6f9a891f538",
        nama_makanan: "Daging Babi Matang",
        jenis_makanan: "Makanan Pokok",
        kalori: 249,
        protein: 27,
        karbohidrat: 0,
        lemak: 14,
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
