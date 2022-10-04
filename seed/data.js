import db from "../db/connection.js";
import Planet from "../models/planet.js";
import planets from "./data.json" assert {type: "json"};

const insertData = async () => {

  db.dropDatabase()

  await Planet.insertMany(planets)

  db.close()
}

insertData()