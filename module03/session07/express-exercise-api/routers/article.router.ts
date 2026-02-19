import express from "express";
import { createArticle, getAllArticles, getArticleById, deleteArticle } from "../controllers/article.controller.js";

const router = express.Router()

router.post("/", createArticle)
router.get("/", getAllArticles)
router.get("/:id", getArticleById) // base_url/api/articles/:id
router.delete("/:id", deleteArticle)

export default router