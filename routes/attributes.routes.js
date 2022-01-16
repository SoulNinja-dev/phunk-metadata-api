import express from "express";
import { attributes } from "../controllers/attributes.controllers.js";

const router = express.Router();

router.get("/", attributes);

export default router;
