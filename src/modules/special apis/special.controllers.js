import { query } from "express"
import db from "../../../db/connectionDB.js"


// ======================================= (1) Get All cars with A spacific Model  ========================================

export const getCarsByModel = async (req , res , next) =>{
    const cars = await db.collection("cars").find({model:{$in:req.query.model}}).toArray()
    res.status(200).json(cars)
}

// ======================================= (2) Get Available cars OF A spacific Model  ========================================

export const getAvaliableCarsOfModel = async (req , res , next) =>{
    const cars = await db.collection("cars").find({status: "available" , model:req.query.model}).toArray()
    res.status(200).json(cars)
}

// ======================================= (3) Get Rented cars OF A spacific Model  ========================================

export const getRentedeCarsOfModel = async (req , res , next) =>{
    const cars = await db.collection("cars").find({status: "rented" , model:req.query.model}).toArray()
    res.status(200).json(cars)
}

// ======================================= (4) Get cars OF A spacific Model with A spacific Status  ========================================

export const getCarsOfModelWithStatus = async (req , res , next) =>{
    const cars = await db.collection("cars").find({status: req.query.status, model:req.query.model}).toArray()
    res.status(200).json(cars)
}