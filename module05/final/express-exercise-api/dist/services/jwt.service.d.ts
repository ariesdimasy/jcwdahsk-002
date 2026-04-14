export declare const hashPassword: (password: string) => Promise<string>;
export declare const comparePassword: (password: string, hash: string) => Promise<boolean>;
export declare const generateToken: (payload: object) => string;
export declare const verifyToken: (token: string) => object | null;
export declare function authorizeRole(role: string): (req: any, res: any, next: any) => any;
//# sourceMappingURL=jwt.service.d.ts.map