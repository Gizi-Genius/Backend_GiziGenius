const jwt = require("jsonwebtoken");
const { Users } = require("../../models");
const { StatusCode, ResponseMessage } = require("../../helpers/httpStatus");
const adminFirebase = require("../../middlewares/auth.firebase");
const { compareSync } = require("bcrypt");
const { where } = require("sequelize");

//user auth login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.Notrequired,
    });
  }

  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.Emailnot,
    });
  } else if (user.isActive === false) {
    return res.status(StatusCode.Unprocessable_Entity).json({
      message:
        "Email sudah terdaftar dan status akun telah nonaktif, silahkan menggunakan email yang lain",
    });
  }

  // check password
  const isPasswordCorrect = compareSync(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.Wrongpass,
    });
  }

  // jwt
  const token = jwt.sign({ id: user.user_id }, "gizi_genius", {
    expiresIn: "1d",
  });

  return res.status(StatusCode.OK).json({
    message: ResponseMessage.LoginSuccess,
    token,
  });
};

// Register Mobile
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Validasi input
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email, dan password diperlukan" });
  }

  try {
    // Validasi email di Firebase
    await adminFirebase.auth().getUserByEmail(email);

    // Jika email sudah terdaftar
    return res.status(StatusCode.BAD_REQUEST).json({
      message: "Email sudah terdaftar, gunakan email lain.",
    });
  } catch (error) {
    // Tangani error validasi email di Firebase
    if (error.code === "auth/user-not-found") {
      try {
        // Buat user di Firebase
        const userRecord = await adminFirebase.auth().createUser({
          email: email,
          password: password,
          displayName: username,
        });

        // Simpan user di database lokal
        const newUser = await Users.create({
          uid: userRecord.uid,
          username,
          email,
          password,
        });

        // Kirim respons sukses
        return res.status(StatusCode.CREATED).json({
          message: ResponseMessage.SuksesRegistered,
          user: newUser,
        });
      } catch (error) {
        // Tangani error saat membuat user di Firebase
        return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
          message: ResponseMessage.FailRegistered,
          error: error.message,
        });
      }
    } else {
      // Tangani error lainnya
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
        message: ResponseMessage.FailRegistered,
        error: error.message,
      });
    }
  }
};

// auth google validate
exports.googleValidate = (req, res) => {
  const uid = req.body.uid;
  adminFirebase
    .auth()
    .getUser(uid)
    .then((result) => {
      const data = result.providerData[0];
      Users.findOne({ where: { uid } }).then((result) => {
        if (!result) {
          Users.create({
            uid,
            nama: data.displayName,
            email: data.email,
            role_id: 2,
            isActive: true,
            photo: data.photoURL,
          }).then((result) => {
            // jwt
            const token = jwt.sign({ id: result.user_id }, "gizi_genius", {
              expiresIn: "30d",
            });

            return res.status(StatusCode.OK).json({
              message: ResponseMessage.LoginSuccess,
              token,
              data,
            });
          });
        } else if (result.isActive === false) {
          return res.status(StatusCode.Unprocessable_Entity).json({
            message:
              "Email sudah terdaftar dan status akun telah nonaktif, silahkan menggunakan email yang lain",
          });
        } else {
          // jwt
          const token = jwt.sign({ id: result.user_id }, "gizi_genius", {
            expiresIn: "30d",
          });

          return res.status(StatusCode.OK).json({
            message: ResponseMessage.LoginSuccess,
            token,
            data,
          });
        }
      });
    })
    .catch(() => {
      return res.status(StatusCode.BAD_REQUEST).json({
        message: ResponseMessage.LoginFailed,
      });
    });
};
