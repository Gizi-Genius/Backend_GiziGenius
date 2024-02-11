const {
  Createmakanan,
  GetallMakanan,
  updateUserProfile,
} = require("../../controller/backend/user.controller");
const {
  findAllUser,
  searchMakanan
} = require("../../controller/backend/filter.controller")
const authjwt = require("../../middlewares/auth.jwt");

module.exports = (express, app, default_router) => {
  const router = express.Router();

  // Users
  router.get("/users", findAllUser)
  router.put("/user-profile", [authjwt], updateUserProfile);



  //Makanan
  router.post("/makanan", [authjwt], Createmakanan);
  router.get("/makanan", [authjwt], GetallMakanan);


  app.use(default_router, router);
};
