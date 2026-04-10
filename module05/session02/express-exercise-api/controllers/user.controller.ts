import { type Request, type Response } from "express";
import prisma from "../config/prisma.js";
import { comparePassword, hashPassword, generateToken, verifyToken } from "../services/jwt.service.js";
import { verifyGoogleToken } from "../services/googleAuth.service.js"
import { findOrCreateGoogleUser } from "../services/user.service.js";

export async function register(req: Request, res: Response) {
    try {

        const { name, email, password } = req.body

        // check email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        })

        // if email already exists, return error
        if (existingUser) {
            // bad request, email already in use
            return res.status(400).json({ error: "Email already in use" });
        }

        const hashed = await hashPassword(password)
        console.log("Hashed password:", hashed)

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashed,
            }
        })

        // created
        res.status(201).json({ message: "User registered successfully", user });


    } catch (err) {
        // internal server error
        // sql error
        res.status(500).json({ error: "Failed to register user" });
    }
}

export async function login(req: Request, res: Response) {
    try {

        const { email, password } = req.body

        const user = await prisma.user.findUnique({
            where: { email: email }
        })
        // { name, email, password }

        // if user not found, return error
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // check password
        const valid = await comparePassword(password, user.password)

        if (!valid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = await generateToken({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        })

        // login successful
        res.status(200).json({
            message: `Login successful. Welcome back ${user.name}!`,
            data: {
                name: user.name,
                email: user.email,
                role: user.role
            },
            token
        });

    } catch (err) {
        res.status(500).json({ error: "Failed to login" });
    }
}

export async function refreshToken(req: Request, res: Response) {
    const { refreshToken } = req.body
    if (!refreshToken) {
        return res.status(400).json({ error: "missing token" })
    }

    try {
        const decoded = verifyToken(refreshToken)
        if (!decoded) {
            return res.status(401).json({ error: "Invalid or expired token" })
        }

        const newAccessToken = generateToken(decoded)
        res.status(200).json({ accessToken: newAccessToken })

    } catch {
        res.status(403).json({ error: "Invalid or expired token" })
    }
}

export async function googleLogin(req: Request, res: Response) {
    try {
        const { idToken } = req.body
        const googleUser = await verifyGoogleToken(idToken)
        const user = await findOrCreateGoogleUser(googleUser, prisma)

        res.status(200).json({
            message: `Login successful. Welcome back ${user.name}!`,
            data: {
                name: user.name,
                email: user.email,
                role: user.role
            },
            token: generateToken({
                id: user.id,
                name: user.name,
                role: user.role,
                email: user.email
            })
        })
    } catch (err) {
        res.status(500).json({ error: "Failed to login with Google" })
    }
}