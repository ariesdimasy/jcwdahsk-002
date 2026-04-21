import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
    log: ("error" | "info" | "query" | "warn")[];
    errorFormat: "pretty";
}, "error" | "info" | "query" | "warn", import("../generated/prisma/runtime/client.js").DefaultArgs>;
export default prisma;
//# sourceMappingURL=prisma.d.ts.map