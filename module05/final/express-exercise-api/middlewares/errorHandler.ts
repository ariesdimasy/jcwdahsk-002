import { AppError } from "../errors/AppError.js";
import { type Request, type Response, type NextFunction } from "express"
import { Prisma } from "../generated/prisma/index.js";
import logger from "../services/logger.service.js";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log("KESINI")

    logger.error(`[${err.name}] : ${err.message}`, { stack: err.stack })

    if (err.stack) console.log(err.stack)

    console.log(`[${err.name}] : ${err.message}`)

    // Prisma Error Handling 
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
            case "P2002":

                return res.status(400).json({ error: "Email already in use, please try again" })
            case "P2025":
                return res.status(404).json({ error: "User not found" })
            default:
                return res.status(500).json({ error: "Failed to process request" })
        }
    }

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ error: err.message })
    }

    res.status(500).json({ error: "Internal Server Error", detail: err.message || "Something went wrong" })
}

