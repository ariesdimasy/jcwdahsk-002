import { type Request, type Response } from "express" // dari node_modules
import pool from "../config/db.js"

export async function getAllTodos(req: Request, res: Response) {
    // membaca file 
    const result = await pool.query("SELECT * FROM todos")
    const todos = result.rows

    res.status(200).send({
        "message": "fetch todos success",
        data: todos
    })
}

export async function getTodoDetail(req: Request, res: Response) {
    const { id } = req.params // params 

    const result = await pool.query("SELECT * from todos where id = $1", [id])
    const todo = result.rows

    return res.status(200).send({
        "message": "fetch todos success",
        data: todo[0]
    })
}

export async function createTodo(req: Request, res: Response) {

    const { title } = req.body

    const result = await pool.query("INSERT INTO todos (title,done) VALUES ($1,false)", [title])
    const todo = result.rows

    return res.status(200).send({
        "message": "insert todos success",
        "data": todo
    })
}

export async function updateTodo(req: Request, res: Response) {

    const { id } = req.params
    const { title } = req.body

    const result = await pool.query("UPDATE todos SET title = $1 , done = false WHERE id = $2", [title, id])
    const todo = result.rows

    return res.status(200).send({
        "message": "update todos success",
        "data": todo
    })

}

export async function deleteTodo(req: Request, res: Response) {

    const { id } = req.params

    const result = await pool.query("DELETE FROM todos where id = $1 ", [id])
    const todo = result.rows

    return res.status(200).send({
        "message": "delete todos success",
        "data": todo

    })

}



