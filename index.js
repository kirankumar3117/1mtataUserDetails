const express=require("express");
const UserController=require("./src/controller/user.controller")
const app=express()

const cors=require("cors");

app.use(cors());

app.use(express.json());

app.use("/user",UserController)

module.exports=app;