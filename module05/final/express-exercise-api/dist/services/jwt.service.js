import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sql as sqltag } from '@prisma/client-runtime-utils';
const secret = process.env.JWT_SECRET || "secret123";
export const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};
export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
export const generateToken = (payload) => {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
};
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
export function authorizeRole(role) {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Authorization header is missing" });
        }
        try {
            const decoded = verifyToken(token);
            if (!decoded) {
                return res.status(401).json({ error: "Invalid or expired token" });
            }
            if (decoded.role !== role) {
                return res.status(403).json({ error: "Insufficient permissions" });
            }
            next();
        }
        catch {
            res.status(401).json({ error: "Invalid or expired token" });
        }
    };
}
//# sourceMappingURL=jwt.service.js.map