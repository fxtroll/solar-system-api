import app from './app.js'
import db from "./db/connection.js";
import chalk from "chalk";

const PORT = process.env.PORT || 3000;

//listeners
db.on("connected", () => {
  console.clear()
  console.log(chalk.blue("Connect to MongoDB!"))
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(`Express server running in development on http://localhost:${PORT}`, "| DATE:", new Date().toLocaleDateString())
  })
})


