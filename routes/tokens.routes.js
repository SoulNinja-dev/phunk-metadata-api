import express from "express";
const router = express.Router();
import { getTokens, getToken } from "../controllers/token.controllers.js";

router.get("/", getTokens);
router.get("/:tokenid", getToken);

export default router;
