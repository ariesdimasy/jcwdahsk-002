import express from "express";
import cors from "cors";
import 'dotenv/config';
import userRouter from "./routers/user.router.js";
import articleRouter from "./routers/article.router.js";
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes
app.use("/api/articles", articleRouter);
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map