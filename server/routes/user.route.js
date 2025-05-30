import express from "express";
import { createUserController, getUserController } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/register', createUserController);
router.post('/login', getUserController);

export default router;