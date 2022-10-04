import express from "express"
import db from "./db/connection.js"
import routes from "./routes/index.js"
import cors from "cors"
import logger from "morgan"

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use('/api', routes)