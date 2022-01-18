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
  let query;
  const reqQuery = { ...req.query };

  const removeQueries = ["select", "page", "value"];

  // removing the unnecesary queries
  removeQueries.forEach((query) => delete reqQuery[query]);
  query = TokenModel.find({
    attributes: {
      $elemMatch: {
        trait_type: trait_type,
      },
    },
  });

  // selecting particular fields query
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = 50;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await TokenModel.countDocuments();
  query = query.skip(startIndex).limit(limit);

  const tokens = await query.catch((e) => {
    console.log(e);
    return res.status(400).json({ status: "error", error: e });
  });

  if (tokens.length < 1) {
    return res
      .status(400)
      .json({ status: "error", error: "Invalid request, check parameters" });
  }

  // pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({
    success: true,
    count: tokens.length,
    pagination: pagination,
    data: tokens,
  });
};

export { attributes };
