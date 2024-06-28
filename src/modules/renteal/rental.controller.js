import { ObjectId } from "mongodb";
import db from "../../../db/connectionDB.js";

//  ======================================= (1) create rental  =======================================

export const createRental = async (req , res , next) =>{
    const {customerID , carID , rentalDate , returnDate} = req.body
    const rental = await db.collection("rentals").replaceOne({carID: carID} , {customerID , carID , rentalDate , returnDate} , {upsert: true})
    const car = await db.collection("cars").updateOne({_id: new ObjectId(carID)}, {$set:{status:"rented"}})
    if(rental.upsertedCount == 0){
        return res.status(400).json({msg:"This Car is already rented... please choose another one."})
    }
    res.status(200).json({msg:"rental is added Successfully"})
}


//  ======================================= (2) update rental  =======================================

export const updateRental = async (req , res , next) =>{
    const {_id  , customerID  , carID , rentalDate , returnDate} = req.body
    const rental = await db.collection("rentals").updateOne({_id: new ObjectId(_id)},{$set: {customerID  , carID , rentalDate , returnDate}})
    if(rental.matchedCount == 0){
        return res.status(400).json({msg:"Can Not update this rental"})
    }
    res.status(200).json({msg:"This rental is updated successfully"})
}

//  ======================================= (3) delete rental  =======================================

export const deleteRental = async (req , res , next) =>{
    const {_id , carID} = req.body
    const rental = await db.collection("rentals").deleteOne({_id: new ObjectId(_id)})
    const car = await db.collection("cars").updateOne({carID}, {$set: {status:"avilable"}})
    if(rental.deletedCount == 0){
        return res.status(400).json({msg:"Can Not delete this rental"})
    }
    res.status(200).json({msg:"This rental is deleted successfully"})
}

//  ======================================= (4) get all rentals  =======================================

export const getAllRentals = async (req , res , next) =>{
    const rental = await db.collection("rentals").find().toArray()
    res.status(200).json(rental)
}


//  ======================================= (5) get a spacific rental  =======================================

export const getAspacificRentals = async (req , res , next) =>{
    const {_id} = req.body
    const rental = await db.collection("rentals").findOne({_id: new ObjectId(_id)})
    if(rental == null){
        return res.status(404).json({msg:"rental Not Found this car"})
    }
    res.status(200).json(rental)
}