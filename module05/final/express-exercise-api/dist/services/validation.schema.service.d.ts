import z from "zod";
export { z };
export declare const articleSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    userId: z.ZodNumber;
}, z.z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const registerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
//# sourceMappingURL=validation.schema.service.d.ts.map