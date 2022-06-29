const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        number:{type:String,required:true},
        cart:{type:Object,required:false},
        orders:{type:Object,required:false},
        payment:{type:Object,required:false}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
const userData=mongoose.model("user",userSchema);
module.exports=userData;