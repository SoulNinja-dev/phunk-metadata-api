const advancedResults = (model) => async (req, res, next) => {
  let query;
  const reqQuery = { ...req.query };

  const removeQueries = ["select", "page"];

  // removing the unnecesary queries
  removeQueries.forEach((query) => delete reqQuery[query]);

  query = model.find(reqQuery);

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
  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  const results = await query.catch((e) => {
    console.log(e);
    return res.status(400).json({ status: "error", error: e });
  });

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

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination: pagination,
    data: results,
  };

  next();
};

export default advancedResults;
