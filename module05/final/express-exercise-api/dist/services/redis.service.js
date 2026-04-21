import { Redis } from "ioredis";
export const redis = new Redis();
redis.on("connect", () => {
    console.log("Redis connected");
});
redis.on("error", (err) => {
    console.log("Redis error", err);
});
//# sourceMappingURL=redis.service.js.map