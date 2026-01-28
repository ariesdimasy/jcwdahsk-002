"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const promises_1 = __importDefault(require("fs/promises"));
const PORT = 8000;
const app = (0, express_1.default)();
// Middleware untuk parsing JSON
app.use(express_1.default.json());
// Middleware untuk parsing data URL-encoded (dari form HTML)
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/api", async (req, res) => {
    res.json({
        "foo": "bar"
    });
});
app.get("/api/todos", async (req, res) => {
    const jsonFile = await promises_1.default.readFile("./todos.json", 'utf-8');
    const todosData = JSON.parse(jsonFile);
    res.status(200).send({
        "message": "fetch todos success",
        data: todosData.todos
    });
});
app.get("/api/todos/:id", async (req, res) => {
    const { id } = req.params;
    const jsonFile = await promises_1.default.readFile("./todos.json", 'utf-8');
    const todosData = JSON.parse(jsonFile);
    const detail = todosData.todos.find((todo) => {
        return todo.id === Number(id);
    });
    if (!detail) {
        return res.status(404).send({
            "message": "todo not found",
        });
    }
    return res.status(200).send({
        "message": "fetch todos success",
        data: detail
    });
});
app.post("/api/todos", async (req, res) => {
    const jsonFile = await promises_1.default.readFile("./todos.json", 'utf-8');
    const todosData = JSON.parse(jsonFile);
    const { title, done } = req.body;
    todosData.todos.push({
        id: todosData.todos[todosData.todos.length - 1].id + 1,
        title,
        done
    });
    const writeJson = await promises_1.default.writeFile("./todos.json", JSON.stringify({
        "todos": todosData.todos
    }));
    return res.status(200).send({
        "message": "insert todos success",
        data: {
            id: todosData.todos[todosData.todos.length - 1].id,
            title, done
        }
    });
});
app.listen(PORT, () => {
    console.log("Application running on port : ", PORT);
});
//# sourceMappingURL=index.js.map