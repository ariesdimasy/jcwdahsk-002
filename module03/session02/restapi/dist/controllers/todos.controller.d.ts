import { type Request, type Response } from "express";
export declare function getAllTodos(req: Request, res: Response): Promise<void>;
export declare function getTodoDetail(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createTodo(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=todos.controller.d.ts.map