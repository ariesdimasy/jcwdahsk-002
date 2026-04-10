import { type Request, type Response } from "express";
export declare function register(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function refreshToken(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function googleLogin(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map