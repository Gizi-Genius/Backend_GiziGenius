const { Makanan, Users } = require("../../models");
const { StatusCode, ResponseMessage } = require("../../helpers/httpStatus");
const response = require("../../helpers/response");

const searchMakanan = (req, res) => {

}

// find all user
const findAllUser = (req, res) => {
  Users
    .findAll()
    .then((result) => {
      response.success("Get all user", result, res);
    })
    .catch((err) => {
      response.error("Get all user failed", err, res);
    });
};

const CalculateNutrition = async(req, res ) => {
  try {
    const totalNutrition = await Makanan.findOne({
      attributes: [
        [sequelize.fn("SUM", sequelize.col("protein")), "totalProtein"],
        [sequelize.fn("SUM", sequelize.col("lemak")), "totalLemak"],
        [sequelize.fn("SUM", sequelize.col("karbohidrat")), "totalKarbohidrat"],
      ],
    });
    return res.status(StatusCode.OK).json({
      message: ResponseMessage.Success,
      data: totalNutrition
    })
  } catch (error) {
    console.error(error);
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      message: ResponseMessage.FailedCalculation
    })
  }
}

module.exports = { 
    searchMakanan,
    findAllUser,
    CalculateNutrition
}