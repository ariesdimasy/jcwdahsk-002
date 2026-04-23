import { Server, Socket } from "socket.io"
// interface IChatMessage {

// }

export function registerChatHandlers(io: Server, socket: Socket) {
    socket.on("sendMessage", (msg: any) => {
        console.log(" New Message ", msg)
        io.emit("receiveMessage", msg)
    })
}