import express from 'express'
import db from './db/connectionDB.js'
import customersRouter from './src/modules/customers/customers.routes.js'
import carsRouter from './src/modules/cars/cars.routes.js'
import rentalRouter from './src/modules/renteal/rental.routes.js'
import specialRouter from './src/modules/special apis/special.routes.js'
const app = express()
const port = process.env.port || 3000
db

app.use(express.json())
app.use("/customers",customersRouter)
app.use("/cars",carsRouter)
app.use("/rentals",rentalRouter)
app.use("/special",specialRouter)

app.use("*",(req , res)=>{
    res.status(404).json({msg:"This Page Not Found"})
})


app.listen(port , ()=> console.log('Your app is Running... on port' , port))

