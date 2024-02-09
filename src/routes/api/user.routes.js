const { Createmakanan } = require("../../controller/backend/user.controller");
const authjwt = require("../../middlewares/auth.jwt");


module.exports = (express, app, default_router) => {
    const router = express.Router();

    router.post("/makanan",
    Createmakanan
    );

    app.use(default_router, router);
};