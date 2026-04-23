import express from "express";
import cors from "cors";
import 'dotenv/config';
import { redis } from "./services/redis.service.js";
import { scheduleTask } from "./cron/jobs/scheduleTask.js";
import exampleQueue from "./queues/queueManager.js";
import userRouter from "./routers/user.router.js";
import articleRouter from "./routers/article.router.js";
import { errorHandler } from "./middlewares/errorHandler.js";
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000', // origin SSR server
    credentials: true, // izinkan cookies/credentials
}));
async function getDataFromDB() {
    console.log("Fetching from Database ... ");
    return { message: "Hello from DB ", time: new Date().toISOString() };
}
app.get("/data", async (req, res) => {
    const cacheKey = "myData";
    const cached = await redis.get(cacheKey);
    if (cached) {
        return res.json({ source: "cache", data: JSON.parse(cached), time: new Date().toISOString() });
    }
    const data = await getDataFromDB();
    const setCached = await redis.set(cacheKey, JSON.stringify(data), "EX", 60); // 10 seconds cache
    console.log("setCached", setCached);
    res.json(data);
});
app.use("/api/articles", articleRouter);
app.use("/api/users", userRouter);
app.get("/enqueue", async (req, res) => {
    await exampleQueue.add('exampleJob', {
        data: "some data"
    });
    res.send("Job enqueued");
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
scheduleTask();
// ⚠️ Error handler HARUS dipasang paling bawah, setelah semua routes
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map