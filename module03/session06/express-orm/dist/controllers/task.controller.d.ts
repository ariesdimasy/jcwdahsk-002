import { type Request, type Response } from "express";
export declare function getAllTasks(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createTask(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function updateTask(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteTask(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=task.controller.d.ts.map