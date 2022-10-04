import chalk from "chalk";
import mongoose from "mongoose";

const MONGODB_URI = process.env.PROD_MONGODB || "mongodb://localhost/solar-api";

mongoose.set("returnOriginal", false);

//mongo connection setup 
mongoose
  .connect(MONGODB_URI)
  .catch(error => console.error("Error connecting to MongoDB: ", error.message));

// listening for mongodb events
mongoose.connection.on("disconnected", () =>
  console.log(chalk.bold(`Disconnected from MongoDB!`))
);

// listening for errors 
mongoose.connection.on("error", error =>
  console.log(chalk.red(`MongoDB connection error: ${error}`))
);

export default mongoose.connection;
