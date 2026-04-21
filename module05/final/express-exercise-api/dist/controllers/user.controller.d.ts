import { type Request, type Response, type NextFunction } from "express";
export declare function register(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function login(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function refreshToken(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function googleLogin(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function uploadAvatar(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getProfile(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function updateProfile(req: Request, res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map