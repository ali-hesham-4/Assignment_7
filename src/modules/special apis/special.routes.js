import { Router } from "express";
import * as SC  from "./special.controllers.js";
const router = Router()


router.get("/" , SC.getCarsByModel)
router.get("/getAvaliableCarsOfModel" , SC.getAvaliableCarsOfModel)
router.get("/getRentedeCarsOfModel" , SC.getRentedeCarsOfModel)
router.get("/getCarsOfModelWithStatus" , SC.getCarsOfModelWithStatus)

export default router