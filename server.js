const app=require("./index");
const connect=require("./src/configue/db");
require('dotenv').config();
const port = process.env.PORT || 8080;

app.listen(port,async()=>{
    try{
        await connect();
        console.log("Listening on port")
    }catch(err){
        console.log({message:err.message})
    }
})