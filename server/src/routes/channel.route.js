import express from "express";
import { createChannel } from "../controllers/channel.controller.js";

const router = express.Router();

// 新增频道
router.post("/create", createChannel);

export default router;
