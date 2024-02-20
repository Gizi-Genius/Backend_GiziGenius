"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reseps", [
      {
        resep_id: "03138c85-4fce-4c7d-9ac5-a143f13e6651",
        nama_resep: "Nasi Goreng",
        bahan_makanan: "Nasi, telur, Bawang Merah, Bawang Putih, Kecap",
        kalori: 350,
        protein: 10,
        lemak: 15,
        karbohidrat: 45,
        deskripsi:
          "Nasi goreng adalah hidangan khas Indonesia yang terbuat dari nasi yang digoreng bersama telur dan bumbu-bumbu lainnya.",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resep_id: "03138c85-4fce-4c7d-9ac5-a143f13e6751",
        nama_resep: "Ayam Goreng",
        bahan_makanan: " Ayam, Tepung Terigu, Garam, Merica, Minyak Goreng",
        kalori: 400,
        protein: 20,
        lemak: 25,
        karbohidrat: 30,
        deskripsi:
          "Ayam goreng adalah hidangan yang terbuat dari potongan ayam yang dilumuri tepung dan kemudian digoreng hingga kecokelatan.",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resep_id: "03138c85-4fce-4c7d-9ac5-a143f13e6721",
        nama_resep: "Capcay",
        bahan_makanan:
          "Sayuran (wortel, kembang kol, sawi, jamur), Udang, Ayam",
        kalori: 200,
        protein: 8,
        lemak: 5,
        karbohidrat: 30,
        deskripsi:
          "Capcay adalah hidangan tumis sayuran yang berasal dari Tiongkok. Biasanya dicampur dengan ayam atau udang.",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resep_id: "03138c85-4fce-4c7d-9ac5-a143f13e2421",
        nama_resep: "Sate Ayam",
        bahan_makanan: " Daging Ayam, Bumbu Kacang, Kecap Manis",
        kalori: 300,
        protein: 15,
        lemak: 10,
        karbohidrat: 20,
        deskripsi:
          "Sate ayam adalah makanan yang terdiri dari potongan-potongan daging ayam yang ditusuk dengan tusukan bambu dan dipanggang dengan bumbu kacang.",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resep_id: "03138c85-4fce-4c7d-9ac5-a143f13e2432",
        nama_resep: "Gado-Gado",
        bahan_makanan:
          "Sayuran (kentang, tauge, bayam, ketimun), Tahu, Tempe, Telur, Bumbu Kacang",
        kalori: 250,
        protein: 12,
        lemak: 8,
        karbohidrat: 35,
        deskripsi:
          "Gado-gado adalah hidangan salad yang terdiri dari berbagai macam sayuran dengan bumbu kacang sebagai sausnya.",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resep_id: "03138c85-4fce-4c7d-9ac5-a143f13e2441",
        nama_resep: "Soto Ayam",
        bahan_makanan:
          "Daging Ayam, Bawang Merah, Bawang Putih, Lengkuas, Serai",
        kalori: 220,
        protein: 14,
        lemak: 7,
        karbohidrat: 25,
        deskripsi:
          "Soto ayam adalah sup tradisional Indonesia yang terbuat dari kaldu ayam yang disajikan dengan daging ayam, mie, dan bumbu-bumbu lainnya.",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resep_id: "03138c85-4fce-4c7d-9ac5-a143f13e2341",
        nama_resep: "Martabak",
        bahan_makanan:
          "Tepung Terigu, Telur, Daging Cincang, Bawang Merah, Bawang Putih",
        kalori: 500,
        protein: 25,
        lemak: 30,
        karbohidrat: 40,
        deskripsi:
          "Martabak adalah makanan yang terbuat dari adonan tepung terigu yang digoreng dan diisi dengan telur, daging cincang, dan bumbu-bumbu lainnya.",
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resep_id: "03138c85-4fce-4c7d-9ac5-a141f13e1341",
        nama_resep: "Bakso",
        bahan_makanan:
          "Daging Sapi Giling, Tepung Tapioka, Telur, Bawang Merah, Bawang Putih",
        kalori: 350,
        protein: 18,
        lemak: 12,
        karbohidrat: 25,
        deskripsi:
          "Bakso adalah bola daging yang terbuat dari daging sapi giling yang dicampur dengan tepung tapioka dan bumbu-bumbu lainnya. Biasanya disajikan dalam kuah panas.",
        photo: null,
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
