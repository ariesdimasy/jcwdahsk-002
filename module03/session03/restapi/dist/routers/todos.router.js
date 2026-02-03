import { Router } from "express";
import * as todosController from "./../controllers/todos.controller.js";
const router = Router();
router.get("/", todosController.getAllTodos);
router.get("/:id", todosController.getTodoDetail);
router.post("/", todosController.createTodo);
router.put("/:id", todosController.updateTodo);
router.delete("/:id", todosController.deleteTodo);
export default router;
//# sourceMappingURL=todos.router.js.map