const jwt = require("jsonwebtoken");
const Usermodel = require("../../models/user");
const { StatusCode, ResponseMessage } = require("../../helpers/httpStatus");
const adminFirebase = require("../../middlewares/auth.firebase");
const { compareSync } = require("bcrypt");
const { where } = require("sequelize");

//user auth login
