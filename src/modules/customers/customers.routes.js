import Router from 'express'
import * as CC from './customers.controllers.js'
const router = Router()

router.post("/" , CC.signUp)
router.get("/" , CC.signIn)
router.get("/getSpacificCustomers" , CC.getSpacificCustomers)
router.get("/getAllCustomers" , CC.getAllCustomers)
router.patch("/" , CC.updateCustomer)
router.delete("/" , CC.deleteCustomer)


export default router