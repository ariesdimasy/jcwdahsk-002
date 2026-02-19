import { type Request, type Response } from "express";
import prisma from "../config/prisma.js";

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

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
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
        if (user.password !== password) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // login successful
        res.status(200).json({
            message: `Login successful. Welcome back ${user.name}!`,
            data: {
                name: user.name,
                email: user.email,
            }
        });

    } catch (err) {
        res.status(500).json({ error: "Failed to login" });
    }
}