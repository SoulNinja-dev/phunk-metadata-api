// getTokens, getToken
import TokenModel from "../models/token.model.js";

const getTokens = async (req, res, next) => {
  // TODO: advanced results middleware for pagination and select
  const tokens = await TokenModel.find({}).catch((e) => {
    console.error(e);
    res.status(500).json({ status: "error", error: e });
  });
  res.status(200).json({ status: "ok", data: tokens });
};

const getToken = async (req, res, next) => {
  const tokenid = req.params.tokenid;
  const token = await TokenModel.find({ tokenid: tokenid }).catch((e) => {
    console.log(e);
    res.status(500).json({ status: "error", error: e });
  });
  if (token.length < 1) {
    return res
      .status(400)
      .json({ status: "error", error: `No token with id ${tokenid}` });
  }
  res.status(200).json({ status: "ok", data: token });
};

export { getTokens, getToken };
