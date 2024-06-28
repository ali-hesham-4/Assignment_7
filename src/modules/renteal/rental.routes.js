import { Router } from "express";
import * as Rc from "./rental.controller.js";
const router = Router()

router.post("/",Rc.createRental)
router.patch("/",Rc.updateRental)
router.delete("/",Rc.deleteRental)
router.get("/",Rc.getAllRentals)
router.get("/getAspacificRentals",Rc.getAspacificRentals)


export default router