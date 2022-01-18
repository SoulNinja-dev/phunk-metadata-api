// attributes

import TokenModel from "../models/token.model.js";

const attributes = async (req, res, next) => {
  const trait_type = req.params.trait_type;
  // empty
  if (!trait_type.trim()) {
    return res
      .status(400)
      .json({ status: "error", error: `No trait type found` });
  }
  console.log(trait_type);
  const tokens = await TokenModel.find({
    attributes: {
      $elemMatch: {
        trait_type: trait_type,
      },
    },
  });
  console.log(tokens);
  res.status(200).json({ status: "ok", data: { tokens } });
};

export { attributes };
