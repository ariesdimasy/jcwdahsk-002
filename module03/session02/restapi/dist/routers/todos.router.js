import { Router } from "express";
import * as todosController from "./../controllers/todos.controller.js";
const router = Router();
router.get("/", (req, res, next) => {
    console.log("handler pertama");
    next();
}, (req, res) => {
    console.log("handler kedua");
    res.send("ini response nya");
}, todosController.getAllTodos);
router.get("/:id", todosController.getTodoDetail);
router.post("/", todosController.createTodo);
// router.put("/:id",)
// router.delete("/:id",)
export default router;
//# sourceMappingURL=todos.router.js.map