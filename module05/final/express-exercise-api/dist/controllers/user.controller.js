import {} from "express";
import prisma from "../config/prisma.js";
import { comparePassword, hashPassword, generateToken, verifyToken } from "../services/jwt.service.js";
import { verifyGoogleToken } from "../services/googleAuth.service.js";
import { findOrCreateGoogleUser } from "../services/user.service.js";
import { loginSchema, registerSchema, z } from "../services/validation.schema.service.js";
import cloudinary from "../services/cloudinary.service.js";
import fs from "fs";
import transporter from "../config/nodemailer.js";
export async function register(req, res, next) {
    try {
        const { name, email, password } = req.body;
        registerSchema.parse({ name, email, password });
        // check email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        });
        // if email already exists, return error
        if (existingUser) {
            // bad request, email already in use
            return res.status(400).json({ error: "Email already in use" });
        }
        const hashed = await hashPassword(password);
        console.log("Hashed password:", hashed);
        // const user = await prisma.user.create({
        //     data: {
        //         name: name,
        //         email: email,
        //         password: hashed,
        //     }
        // })
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to YDH App",
            html: `Hello ${name}, welcome to YDH App!`,
        });
        console.log(" email sent : ", info.messageId);
        // created
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (err) {
        next(err);
    }
}
export async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        loginSchema.parse({ email, password });
        const user = await prisma.user.findUnique({
            where: { email: email }
        });
        // { name, email, password }
        // if user not found, return error
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        // check password
        const valid = await comparePassword(password, user.password);
        if (!valid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const token = await generateToken({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        });
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
    }
    catch (err) {
        next(err);
    }
}
export async function refreshToken(req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(400).json({ error: "missing token" });
    }
    try {
        const decoded = verifyToken(refreshToken);
        if (!decoded) {
            return res.status(401).json({ error: "Invalid or expired token" });
        }
        const newAccessToken = generateToken(decoded);
        res.status(200).json({ accessToken: newAccessToken });
    }
    catch {
        res.status(403).json({ error: "Invalid or expired token" });
    }
}
export async function googleLogin(req, res, next) {
    try {
        const { idToken } = req.body;
        const googleUser = await verifyGoogleToken(idToken);
        const user = await findOrCreateGoogleUser(googleUser, prisma);
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
        });
    }
    catch (err) {
        next(err);
    }
}
export async function uploadAvatar(req, res, next) {
    try {
        const file = req.file;
        const userId = parseInt(req.params['userId'] ?? '0');
        if (!file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const result = await cloudinary.v2.uploader.upload(file.path, {
            folder: "avatars",
            transformation: [{ width: 400, height: 400, crop: "fill", gravity: "face" }]
        });
        // hapus file temp setelah upload
        fs.unlinkSync(file.path);
        await prisma.user.update({
            where: { id: userId },
            data: { avatarUrl: result.secure_url }
        });
        res.status(200).json({ message: "Avatar uploaded successfully", avatarUrl: result.secure_url });
    }
    catch (err) {
        next(err);
    }
}
export async function getProfile(req, res, next) {
    try {
        const userId = parseInt(req.params['userId'] ?? '0');
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user)
            return res.status(404).json({ error: "User not found" });
        res.status(200).json({ data: user });
    }
    catch (err) {
        next(err);
    }
}
export async function updateProfile(req, res, next) {
    try {
        const userId = parseInt(req.params['userId'] ?? '0');
        const { name, email } = req.body;
        const user = await prisma.user.update({
            where: { id: userId },
            data: { name, email },
        });
        res.status(200).json({ message: "Profile updated successfully", data: user });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=user.controller.js.map