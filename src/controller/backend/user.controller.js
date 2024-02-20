const { Makanan, Users, Resep } = require("../../models");
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


// Update Profile
const AddUserProfile = async (req, res) => {
  let {
    user_id,
    olahraga,
    gender,
    berat_badan,
    tinggi_badan,
    target,
    umur,
  } = req.body;

  try {
    const addUserProfile = await Users.create(
      {
        olahraga,
        gender,
        berat_badan,
        tinggi_badan,
        target,
        umur,
      },
      {
        where: {
          user_id,
        },
      }
    );

    return res.status(StatusCode.OK).json({
      message: ResponseMessage.Added,
    });
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.FailAdded,
    });
  }
};
// Update Profile
const updateUserProfile = async (req, res) => {
  let {
    user_id,
    username,
    email,
    password,
    olahraga,
    gender,
    berat_badan,
    tinggi_badan,
    target,
    umur,
    photo,
  } = req.body;

  try {
    const updateProfile = await Users.update(
      {
        username,
        email,
        password,
        olahraga,
        gender,
        berat_badan,
        tinggi_badan,
        target,
        umur,
        photo,
      },
      {
        where: {
          user_id,
        },
      }
    );

    return res.status(StatusCode.OK).json({
      message: ResponseMessage.Updated,
    });
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.FailUpdated,
    });
  }
};

// Get all Resep
const GetallResep = (req, res) => {
  Resep.findAll()
  .then((result) => {
    return res.status(StatusCode.OK).json({
      message: ResponseMessage.Success
    })
  }).catch((err) => {
    return res.status(StatusCode.NOT_FOUND).json({
      message: ResponseMessage.NotFound
    })
  });
}

module.exports = {
  Createmakanan,
  GetallMakanan,
  updateUserProfile,
  AddUserProfile,
  GetallResep
};
