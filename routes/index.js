import planetRoutes from "./planets.js"
import { Router } from "express"

const router = Router();

router.get("/", (req, res) => res.send("This is the api route!"))

router.use("/", planetRoutes)

export default router;