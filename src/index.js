import express from "express"
import * as OpenAiService from "../services/openai.js"

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send("API com chat - GPT")
})

app.get ('/summary', async(req, res) => {
    const { url } = req.query
    const summary = await OpenAiService.getSummary(url)
    res.send(`<strong>Resumo:</strong> ${summary} <br><br><strong>Referência</strong> ${url}`)
})

app. listen (PORT, () => {
    console.log (`Servidor rodando na porta ${PORT}`)
})