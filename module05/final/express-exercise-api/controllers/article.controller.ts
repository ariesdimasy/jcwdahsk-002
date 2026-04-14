import { type Request, type Response } from "express";
import prisma from "../config/prisma.js";


export async function createArticle(req: Request, res: Response) {
    try {
        const { title, content, userId } = req.body

        const user = await prisma.user.findUnique({
            where: { id: userId }
        })

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const checkTitle = await prisma.article.findFirst({
            where: { title: title }
        })

        if (checkTitle) {
            return res.status(400).json({ error: "Article with this title already exists" });
        }

        const article = await prisma.article.create({
            data: {
                title,
                content,
                userId: userId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
            }
        })

        res.status(201).json({ message: "Article created successfully", article });

    } catch (err) {
        res.status(500).json({ error: "Failed to create article" });
    }
}

export async function getAllArticles(req: Request, res: Response) {
    try {

        const { keyword } = req.query

        let whereClause = {}

        if (keyword) {
            whereClause = {
                title: {
                    contains: keyword as string,
                }
            }
        }

        const articles = await prisma.article.findMany({
            where: whereClause,
            include: {

                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },

            }
        })

        res.status(200).json({ message: "Articles retrieved successfully", articles });
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve articles" });
    }
}

export async function getArticleById(req: Request, res: Response) {
    try {
        const { id } = req.params // namanya id karena sudah didefinisikan di route sebagai :id

        const article = await prisma.article.findUnique({
            where: { id: Number(id) },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                }
            }
        })

        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        res.status(200).json({ message: "Article retrieved successfully", article });
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve article" });
    }
}

export async function deleteArticle(req: Request, res: Response) {
    try {
        const { id } = req.params

        // check article by id
        const article = await prisma.article.findUnique({
            where: { id: Number(id) }
        })

        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        await prisma.article.delete({
            where: { id: Number(id) }
        })

        res.status(200).json({ message: "Article deleted successfully" });

    } catch (err) {
        res.status(500).json({ error: "Failed to delete article" });
    }
}