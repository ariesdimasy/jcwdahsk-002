interface ChatMessage {
    user: string;
    text: string;
    time: string;
}

interface MessageProps {
    msg: ChatMessage;
    isOwn: boolean;
}

export default function Message({ msg, isOwn }: MessageProps) {
    return (
        <div
            className={`flex flex-col mb-2 ${isOwn ? "items-end" : "items-start"
                }`}
        >
            <div
                className={`px-3 py-2 rounded-lg max-w-xs ${isOwn
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
            >
                <p className="text-sm font-semibold">{msg.user}</p>
                <p className="text-base">{msg.text}</p>
                <span className="text-xs text-gray-300">{msg.time}</span>
            </div>
        </div>
    );
}