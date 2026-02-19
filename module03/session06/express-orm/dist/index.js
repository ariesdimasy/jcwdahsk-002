import express, {} from "express";
import taskRouter from "./routers/task.router.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/tasks", taskRouter); // middleware level application
// middleware level handler
app.get("/", (req, res) => {
    res.status(200).send({
        "message": "This is response from `/`"
    });
});
app.listen(8082, () => {
    console.log("application running on port : 8082");
});
// GET /
// GET /products
//# sourceMappingURL=index.js.map