import express from "express";
import { getTokens, getToken } from "../controllers/token.controllers.js";

const router = express.Router();

router.get("/", getTokens);
router.get("/:tokenid", getToken);

export default router;
