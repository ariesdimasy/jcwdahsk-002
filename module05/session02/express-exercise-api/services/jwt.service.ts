import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sql as sqltag } from '@prisma/client-runtime-utils';

const secret = process.env.JWT_SECRET || "secret123"

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash)
}

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, secret, { expiresIn: '1h' })
}

export const verifyToken = (token: string): object | null => {
    try {
        const decoded = jwt.verify(token, secret)
        return decoded as object
    } catch (error) {
        return null
    }
}

export function authorizeRole(role: string) {
    return (req: any, res: any, next: any) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Authorization header is missing" });
        }

        try {
            const decoded = verifyToken(token);
            if (!decoded) {
                return res.status(401).json({ error: "Invalid or expired token" });
            }

            if ((decoded as any).role !== role) {
                return res.status(403).json({ error: "Insufficient permissions" });
            }

            next();
        } catch {
            res.status(401).json({ error: "Invalid or expired token" });
        }

    }

}