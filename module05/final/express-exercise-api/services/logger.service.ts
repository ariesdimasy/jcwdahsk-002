import { createLogger, format, transports } from "winston"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Path absolut ke folder logs/ di root project (naik 2 level dari services/)
const logsDir = path.join(__dirname, "../../logs")

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.errors({ stack: true }),
        format.splat(),
        format.printf(({ timestamp, level, message, stack }) => {
            return `${timestamp} [${level}]: ${message}${stack ? `\n${stack}` : ""}`
        })
    ),
    defaultMeta: { service: "user-service" },
    transports: [
        new transports.File({ filename: path.join(logsDir, "error.log"), level: "error" }),
        new transports.File({ filename: path.join(logsDir, "combined.log") }),
    ],
})

if (process.env.NODE_ENV !== "production") {
    logger.add(new transports.Console({
        format: format.simple()
    }))
}

export default logger