import { Router } from "express";
import * as CC from "./cars.controllers.js";
const router = Router()


router.post("/",CC.addCar)
router.get("/getASpecificCar",CC.getASpecificCar)
router.get("/",CC.getAllCars)
router.patch("/",CC.updateACar)
router.delete("/",CC.deleteACar)


export default router