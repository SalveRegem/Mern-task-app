const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./config/connectDB.js")
const mongoose = require("mongoose")


// own express middleware 
/* app.use(express.json()) */ //for json data
app.use(express.urlencoded({extended:false})) // for urlencoded data

//middleware
/* const logger = (req,res,next) =>{
    console.log("middleware ran");
    console.log(req.method);
    next()
} */

//routes
app.get("/", (req,res) => {
        res.send("homepage")
})

// Create a task

app.post("/api/tasks", (req,res) =>{
    console.log(req.body);
    res.send("task created")
})


// first way to connect to mongoDB and start the server 
/* const startServer = async () =>{
    try {
       await connectDB();
        const PORT = process.env.PORT || 5000;
            app.listen(PORT , () =>{
            console.log(`Server running on port ${PORT}`);
})
    } catch (error) {
        console.log(error);
    }
}

startServer(); */


//-------------------------------------
//second way to connect to mongoDB

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
            const PORT = process.env.PORT || 5000;
            app.listen(PORT , () =>{
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
            console.log(error);
        })

const Task = require("./Model/TaskModel.js")

