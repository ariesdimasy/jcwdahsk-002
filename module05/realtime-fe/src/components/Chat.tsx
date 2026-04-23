import React, { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import Message from "./Message";

interface ChatMessage {
    user: string;
    text: string;
    time: string;
}

const socket: Socket = io("http://localhost:5000"); // ganti sesuai backend kamu

export default function Chat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [user, setUser] = useState("");
    const [text, setText] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // Auto-scroll ke bawah saat pesan baru masuk
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Setup koneksi socket
    useEffect(() => {
        socket.on("connect", () => setIsConnected(true));
        socket.on("disconnect", () => setIsConnected(false));

        socket.on("receiveMessage", (message: ChatMessage) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("receiveMessage");
        };
    }, []);

    // Fungsi kirim pesan
    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!user.trim() || !text.trim()) return;

        const newMessage: ChatMessage = {
            user,
            text,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        socket.emit("sendMessage", newMessage);
        setText("");
    };


    return (
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-4 flex flex-col border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <span
                        className={`w-3 h-3 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"
                            }`}
                    ></span>
                    <span className="text-gray-700 text-sm">
                        {isConnected ? "Online" : "Offline"}
                    </span>
                </div>
                <span className="text-sm text-gray-500">{messages.length} messages</span>
            </div>

            {/* Username Input */}
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Enter your name..."
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Chat Box */}
            <div className="flex-1 overflow-y-auto mb-3 border rounded-md p-2 bg-gray-50 space-y-2 max-h-96">
                {messages.map((msg, i) => (
                    <Message key={i} msg={msg} isOwn={msg.user === user} />
                ))}
                <div ref={messagesEndRef} />
            </div>


            {/* Input Area */}
            <form onSubmit={handleSend} className="flex gap-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    disabled={!isConnected}
                    className={`px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-200 ${isConnected
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    Send
                </button>
            </form>
        </div>
    );
}