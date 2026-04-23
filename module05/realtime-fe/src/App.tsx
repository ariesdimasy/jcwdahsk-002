import Chat from "./components/Chat";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        💬 Chit Chat App
      </h1>
      <Chat />
    </div>
  );
}