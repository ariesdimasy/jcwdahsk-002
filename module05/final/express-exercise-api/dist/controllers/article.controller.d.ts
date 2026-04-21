import { type Request, type Response, type NextFunction } from "express";
export declare function createArticle(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getAllArticles(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function getArticleById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteArticle(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=article.controller.d.ts.map