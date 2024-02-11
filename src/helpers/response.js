const success = (message, data, res) => {
  res.status(200).json({
    message: message,
    data: data,
  });
};

const empty = (message, res) => {
  res.status(404).json({
    message: message,
  });
};

const error = (message, err, res) => {
  res.status(500).json({
    message: message,
    error: err,
  });
};

const cart = (message, item, res) => {
  res.status(200).json({
    message: message,
    data: [
      {
        nama_toko: "",
        toko_id: "",
        detail_item: item,
      },
    ],
  });
};

module.exports = {
  success,
  empty,
  error,
  cart,
};
