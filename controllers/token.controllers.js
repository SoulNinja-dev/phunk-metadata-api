// getTokens, getToken
import TokenModel from "../models/token.model.js";

const getTokens = async (req, res, next) => {
  res.status(200).json({ status: "ok", data: res.advancedResults });
};

const getToken = async (req, res, next) => {
  const tokenid = req.params.tokenid;
  let query = TokenModel.find({ tokenid: tokenid });

  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  const token = await query.catch((e) => {
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
