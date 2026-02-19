import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './../generated/prisma/client.js';
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
    log: ("info" | "query" | "warn" | "error")[];
    errorFormat: "pretty";
}, "info" | "query" | "warn" | "error", import("../generated/prisma/runtime/client.js").DefaultArgs>;
export default prisma;
//# sourceMappingURL=prisma.d.ts.map