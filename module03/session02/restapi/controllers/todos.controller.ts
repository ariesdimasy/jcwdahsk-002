import { type Request, type Response } from "express"
import fs from "fs/promises"

export async function getAllTodos(req: Request, res: Response) {
    // membaca file 
    const jsonFile = await fs.readFile("./todos.json", 'utf-8')
    const todosData = JSON.parse(jsonFile) // object di js atau array 

    res.status(200).send({
        "message": "fetch todos success",
        data: todosData.todos
    })
}

export async function getTodoDetail(req: Request, res: Response) {
    const { id } = req.params // params 
    // baca todos.json
    const jsonFile = await fs.readFile("./todos.json", 'utf-8')
    const todosData = JSON.parse(jsonFile) // convert ke object 

    // pencarian todos yang id nya sekian
    const detail = todosData.todos.find((todo: {
        id: number, title: string, done: boolean
    }) => {
        return todo.id === Number(id)
    })

    if (!detail) {
        return res.status(404).send({
            "message": "todo not found",
        })
    }

    return res.status(200).send({
        "message": "fetch todos success",
        data: detail
    })
}

export async function createTodo(req: Request, res: Response) {

    const jsonFile = await fs.readFile("./todos.json", 'utf-8')
    const todosData = JSON.parse(jsonFile) // array of object

    const { title, done } = req.body

    todosData.todos.push({
        id: todosData.todos[todosData.todos.length - 1].id + 1, // 2 + 1
        title,
        done
    })


    // menulis ulang keseluruhan file json nya
    const writeJson = await fs.writeFile("./todos.json", JSON.stringify({
        "todos": todosData.todos
    }))

    return res.status(200).send({
        "message": "insert todos success",
        data: {
            id: todosData.todos[todosData.todos.length - 1].id,
            title, done
        }
    })
}



