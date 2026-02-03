import { Pool } from "pg";
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "gokasir",
    password: "999999",
    port: 5432
});
export default pool;
//# sourceMappingURL=db.js.map