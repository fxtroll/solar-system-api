import Planet from "../models/planet";

export const getPlanets = async (req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const getPlanet = async (req, res) => {
  const { planet } = req.params
  let filter = { name: planet }
  const searchResult = await Planet.findOne(filter)
  if (searchResult) {
    return res.json(searchResult)
  }
  res.status(400).json({ message: "Planet not found!" })
}

export const createPlanet = async (req, res) => {
  const planet = new Planet(req.body)
  await planet.save()
  res.status(201).json(planet)
}

export const updatePlanet = async (req, res) => {
  const { id } = req.params
  const planet = await Planet.findByIdAndUpdate(id, req.body)
  res.status(200).json(planet)
}

export const deletePlanet = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Planet.findByIdAndDelete(id)

    if (deleted) return res.status(200).send("Planet deleted")
    throw new Error("Planet not found")
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}