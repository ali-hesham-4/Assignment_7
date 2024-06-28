import { ObjectId } from "bson"
import db from "../../../db/connectionDB.js"

//  ======================================= (1) add car  =======================================

export const addCar = async (req,res,next) =>{
    const car = await db.collection("cars").insertOne(req.body)
    res.status(200).json({msg:"car added Successfully"})
}


//  ======================================= (2) Get a specific car  =======================================

export const getASpecificCar = async (req,res,next) =>{
    const {_id} = req.body
    const car = await db.collection("cars").findOne({_id: new ObjectId(_id)})
    if(car == null){
        return res.status(404).json({msg:"Can Not Found this car"})
    }
    res.status(200).json(car)
}


//  ======================================= (3) Get All  cars  =======================================

export const getAllCars = async (req,res,next) =>{
    const car = await db.collection("cars").find().toArray()
    res.status(200).json(car)
}


//  ======================================= (4) update a car  =======================================

export const updateACar = async (req,res,next) =>{
    const {_id , name , model , status } = req.body
    const car = await db.collection("cars").updateOne({_id: new ObjectId(_id)} , {$set: {name , model , status}})
    if(car.matchedCount == 0){
        return res.status(400).json({msg:"Can Not update this car"})
    }
    res.status(200).json({msg:"This car is updated successfully"})
}


//  ======================================= (4) delete a car  =======================================

export const deleteACar = async (req,res,next) =>{
    const {_id} = req.body
    const car = await db.collection("cars").deleteOne({_id: new ObjectId(_id)})
    if(car.deletedCount == 0){
        return res.status(400).json({msg:"Can Not delete this car"})
    }
    res.status(200).json({msg:"This car is deleted successfully"})
}