import express from "express";
import { register, login, refreshToken, googleLogin } from "../controllers/user.controller.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/refresh-token", refreshToken);
router.post("/google-auth", googleLogin);
export default router;
//# sourceMappingURL=user.router.js.map