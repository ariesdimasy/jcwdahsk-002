import express from "express"
import cors from "cors"
import 'dotenv/config'
import { streamText, convertToModelMessages } from "ai"
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import prisma from "./config/prisma.js"

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors()) // Enable CORS for all routes

const openRouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY || "",
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post("/api/chat", async (req, res) => {
    const { messages, chatSessionId, model = 'google/gemini-2.0-pro-exp-02-05:free' } = req.body

    const result = await streamText({
        model: openRouter(model),
        messages: await convertToModelMessages(messages),
        onFinish: async (response) => {
            // Save the conversation to the database
            await prisma.message.createMany({
                data: [{
                    chatSessionId,
                    content: messages[messages.length - 1].text, // User's message

                },
                {

                    content: response.text, // AI's response
                    chatSessionId
                }
                ],
            })
        }
    })

    result.pipeTextStreamToResponse(res)

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})