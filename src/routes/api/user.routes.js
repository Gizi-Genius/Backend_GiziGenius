const { Createmakanan, GetallMakanan } = require("../../controller/backend/user.controller");
const authjwt = require("../../middlewares/auth.jwt");

module.exports = (express, app, default_router) => {
  const router = express.Router();

  router.post(
    "/makanan",
    [authjwt],
    Createmakanan
  );

  router.get(
    "/makanan",
    [authjwt],
    GetallMakanan
  )

  app.use(default_router, router);
};
