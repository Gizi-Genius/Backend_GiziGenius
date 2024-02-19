const {
  Createmakanan,
  GetallMakanan,
  updateUserProfile,
  AddUserProfile,
} = require("../../controller/backend/user.controller");
const {
  findAllUser,
  searchMakanan,
} = require("../../controller/backend/filter.controller");
const authjwt = require("../../middlewares/auth.jwt");

module.exports = (express, app, default_router) => {
  const router = express.Router();

  // Users
  router.get("/users", findAllUser);
  router.put("/user-profile", [authjwt], updateUserProfile);
  router.post("/user-profile", [authjwt], AddUserProfile);

  //Makanan
  router.post("/makanan/add", [authjwt], Createmakanan);
  router.get("/makanan", [authjwt], GetallMakanan);

  app.use(default_router, router);
};
