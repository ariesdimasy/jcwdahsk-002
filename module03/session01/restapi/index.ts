
import express, { Request, Response } from "express"
import fs from "fs/promises"

const PORT = 8000
const app = express()

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk parsing data URL-encoded (dari form HTML)
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req: Request, res: Response) => {
    res.json({
        "foo": "bar"
    })
})

app.get("/api/todos", async (req: Request, res: Response) => {
    const jsonFile = await fs.readFile("./todos.json", 'utf-8')
    const todosData = JSON.parse(jsonFile)

    res.status(200).send({
        "message": "fetch todos success",
        data: todosData.todos
    })
})

app.get("/api/todos/:id", async (req: Request, res: Response) => {
    const { id } = req.params
    const jsonFile = await fs.readFile("./todos.json", 'utf-8')
    const todosData = JSON.parse(jsonFile)

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
})

app.post("/api/todos", async (req: Request, res: Response) => {

    const jsonFile = await fs.readFile("./todos.json", 'utf-8')
    const todosData = JSON.parse(jsonFile)

    const { title, done } = req.body

    todosData.todos.push({
        id: todosData.todos[todosData.todos.length - 1].id + 1,
        title,
        done
    })

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
})

app.listen(PORT, () => {
    console.log("Application running on port : ", PORT)
})