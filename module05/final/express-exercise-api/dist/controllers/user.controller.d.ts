import { type Request, type Response } from "express";
export declare function register(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function refreshToken(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function googleLogin(req: Request, res: Response): Promise<void>;
export declare function uploadAvatar(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function updateProfile(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map