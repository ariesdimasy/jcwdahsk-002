import { type Request, type Response } from "express";
export declare function createArticle(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getAllArticles(req: Request, res: Response): Promise<void>;
export declare function getArticleById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteArticle(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=article.controller.d.ts.map