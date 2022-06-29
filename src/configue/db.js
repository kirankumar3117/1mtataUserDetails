const mongoose=require("mongoose");

const connect=()=>{
    mongoose.connect("mongodb+srv://1mtatauser:1mtatauser@1mtatauser.t80iu.mongodb.net/?retryWrites=true&w=majority")
}
module.exports=connect;