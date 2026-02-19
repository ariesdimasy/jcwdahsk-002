import { type Request, type Response } from "express"
import prisma from "./../config/prisma.js"


export async function getAllTasks(req: Request, res: Response) {

    try {

        const { keyword, page } = req.query

        let where = {}

        if (keyword) {
            where = {
                title: {
                    contains: String(keyword)
                }
            }
        }

        const take = 10
        const skip = (Number(page) - 1) * take

        const q = await prisma.task.findMany({
            include: {
                user: true
            },
            take: take,
            skip: skip,
            where: where
        })

        const tasks = q

        return res.status(200).send({
            message: "get all task success",
            data: tasks
        })
    } catch (err) {
        return res.status(500).send({
            message: JSON.stringify(err),
        })
    }


}
export async function createTask(req: Request, res: Response) {

    try {
        const { title, description } = req.body

        const query = await prisma.task.create({
            data: {
                title, description, done: false, userId: 2,
            }
        })

        res.status(201).send({
            message: "create task success",
            data: query
        })
    } catch (err) {
        return res.status(500).send({
            message: JSON.stringify(err),
        })
    }
}

export async function updateTask(req: Request, res: Response) {
    try {
        const { title, description, done } = req.body
        const { id } = req.params // masih dalam bentuk string

        const query = await prisma.task.update({
            data: {
                title, description, done: done
            },
            where: {
                id: Number(id)
            }
        })

        res.status(200).send({
            message: "updated task success",
            data: query
        })
    } catch (err) {
        return res.status(500).send({
            message: JSON.stringify(err),
        })
    }
}

export async function deleteTask(req: Request, res: Response) {
    try {

        const { id } = req.params // masih dalam bentuk string

        const query = await prisma.task.delete({

            where: {
                id: Number(id)
            }
        })

        res.status(200).send({
            message: "deleted task success",
            data: query
        })
    } catch (err) {
        return res.status(500).send({
            message: JSON.stringify(err),
        })
    }
}
