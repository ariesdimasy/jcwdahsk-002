import express from "express";
import { createArticle, getAllArticles, getArticleById, deleteArticle } from "../controllers/article.controller.js";
import { authorizeRole } from "../services/jwt.service.js";
const router = express.Router();
router.post("/", authorizeRole("ADMIN"), createArticle);
router.get("/", getAllArticles);
router.get("/:id", getArticleById); // base_url/api/articles/:id
// router.put("/:id", updateArticle) 
router.delete("/:id", authorizeRole("ADMIN"), deleteArticle);
export default router;
//# sourceMappingURL=article.router.js.map