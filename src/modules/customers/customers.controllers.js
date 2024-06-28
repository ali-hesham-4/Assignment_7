import { ObjectId } from "bson"
import db from "../../../db/connectionDB.js"


//  ======================================= (1) signup  =======================================

export const signUp = async (req , res , next)=>{
    const customers = await db.collection("customers").insertOne(req.body)
    res.status(200).json({msg:"Customer added Successfully"})
}

// ======================================= (2) sign In  ========================================

export const signIn = async (req , res , next)=>{
    const {email , password} = req.body
    const customers = await db.collection("customers").findOne({email , password})
    res.status(200).json({msg:"Loged in Successfulley" , customers})
}

// ======================================= (3) Get A spacific customer  ========================================

export const getSpacificCustomers = async (req , res , next)=>{
    const {_id} = req.body
    const customers = await db.collection("customers").findOne({_id: new ObjectId(_id)})
    if(customers == null){
        return res.status(404).json({msg:"Can Not Found this customer"})
    }
    res.status(200).json(customers)
}

// ======================================= (4) Get All customers  ========================================

export const getAllCustomers = async (req , res , next)=>{
    const customers = await db.collection("customers").find().toArray()
    res.status(200).json({msg:"done" , customers})
}

// ======================================= (5) update customer  ========================================

export const updateCustomer = async (req , res , next)=>{
    const {email , password } = req.body
    const customers = await db.collection("customers").updateOne({email , password} , {$set:req.body})
    if(customers.matchedCount == 0){
        return res.status(400).json({msg:"Can Not update this customer"})
    }
    res.status(200).json({msg:"This customer is updated successfully"})
}

// ======================================= (6) delete customer  ========================================

export const deleteCustomer = async (req , res , next)=>{
    const {email , password } = req.body
    const customers = await db.collection("customers").deleteOne({email , password})
    if(customers.deletedCount == 0){
        return res.status(400).json({msg:"Can Not delete this customer"})
    }
    res.status(200).json({msg:"This customer is deleted successfully"})
}

