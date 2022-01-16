// getTokens, getToken
import TokenModel from "../models/token.model.js";

const getTokens = (req, res, next) => {
  res.status(200).json({ status: "ok", data: {} });
};

const getToken = (req, res, next) => {
  console.log(req.params.tokenid);
  res.status(200).json({ status: "ok", data: {} });
};

export { getTokens, getToken };
