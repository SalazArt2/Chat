import express from "express";
import protectRoute from "../middleware/protectroute.js";
import { sendMessage, getMessages, getUsersForSideBar, } from "../controllers/message.controller.js";
const router = express.Router();
router.get("/conversations", protectRoute, getUsersForSideBar);
router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);
export default router;
