require('dotenv').config()
require('./config/db')

const express = require("express");
const cors = require("cors");
const app=express();

const MemberRouter =require("./routes/memberRoutes")
const CoronaRouter = require("./routes/coronaRoutes")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/member", MemberRouter);
app.use("/corona", CoronaRouter)

app.listen(5000,()=>{
    console.log("listening port 5000 :)");
})
