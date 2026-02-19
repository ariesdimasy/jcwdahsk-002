import { Router } from "express";
import * as taskController from "../controllers/task.controller.js";
const router = Router();
router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.get("/important", () => { }); // /task/important
export default router;
//# sourceMappingURL=task.router.js.map