import express from "express";
import { register, login, refreshToken, googleLogin, getProfile, updateProfile, uploadAvatar } from "../controllers/user.controller.js";
import multer from "multer";
const upload = multer({
    storage: multer.diskStorage({
        destination: "uploads/avatars",
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        }
    }),
});
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/profile/:userId", getProfile);
router.put("/profile/:userId", updateProfile);
router.post("/profile/:userId/upload-avatar", upload.single("file"), uploadAvatar);
router.get("/refresh-token", refreshToken);
router.post("/google-auth", googleLogin);
export default router;
//# sourceMappingURL=user.router.js.map