
import express, { type Request, type Response } from "express"
import todosRouter from "./routers/todos.router.js"

const PORT = 8000
const app = express()

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk parsing data URL-encoded (dari form HTML)
app.use(express.urlencoded({ extended: true }));

// grouping route
app.use("/api/todos", todosRouter)

app.get("/api", async (req: Request, res: Response) => {
    res.json({
        "foo": "bar"
    })
})



app.listen(PORT, () => {
    console.log("Application running on port : ", PORT)
})