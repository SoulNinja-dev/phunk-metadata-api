import express from "express";
import { getTokens, getToken } from "../controllers/token.controllers.js";
import TokenModel from "../models/token.model.js";
import advancedResults from "../middlewares/advancedresults.middleware.js";

const router = express.Router();

router.get("/", advancedResults(TokenModel), getTokens);
router.get("/:tokenid", getToken);

export default router;
