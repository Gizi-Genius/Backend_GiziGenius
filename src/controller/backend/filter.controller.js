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

module.exports = { 
    searchMakanan,
    findAllUser
}