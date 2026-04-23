import http from "http"
import { Server } from "socket.io"
// import { registerChatHandlers } from "./chat.socket"

const PORT = 5000
const server = http.createServer()

const io = new Server(server, {
    cors: { origin: "*" }
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`)
    // registerChatHandlers(io, socket)

    socket.on("disconnected", () => {
        console.log(`User disconnected: ${socket.id}`)
    })
})

server.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`)
})