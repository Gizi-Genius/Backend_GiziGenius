const { Makanan } = require("../../models");
const { StatusCode, ResponseMessage } = require("../../helpers/httpStatus");
const response = require("../../helpers/response");
// Makanan

// GetALLMakanan
const GetallMakanan = async (req, res) => {
  Makanan.findAll()
    .then((result) => {
      response.success("Get all Menu", result, res);
    })
    .catch((err) => {
      response.error("Get all Menu failed", err, res);
    });
};

// Create
const Createmakanan = (req, res) => {
  let {
    nama_makanan,
    jenis_makanan,
    kalori,
    protein,
    karbohidrat,
    lemak,
    takaran,
  } = req.body;
  const userId = req.userId;

  Makanan.create({
    user_id: userId,
    nama_makanan,
    jenis_makanan,
    kalori,
    protein,
    karbohidrat,
    lemak,
    takaran,
  })
    .then((result) => {
      return res.status(StatusCode.CREATED).json({
        message: ResponseMessage.MakananCreated,
        result,
      });
    })
    .catch((err) => {
      console.log(err); // simpan pesan kesalahan dalam sesi
      return res.status(StatusCode.BAD_REQUEST).json({
        message: ResponseMessage.FailAdded,
      });
    });
};

module.exports = {
  Createmakanan,
  GetallMakanan
};
