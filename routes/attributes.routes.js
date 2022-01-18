import express from "express";
import { attributes } from "../controllers/attributes.controllers.js";

const router = express.Router();

router.get("/:trait_type", attributes);

export default router;
