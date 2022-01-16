// attributes

import TokenModel from "../models/token.model.js";

const attributes = (req, res, next) => {
  res.status(200).json({ status: "ok", data: {} });
};

export { attributes };
