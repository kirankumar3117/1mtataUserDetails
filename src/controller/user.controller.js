const userData=require("../model/user.model");

const express=require("express");

const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const userdata=await userData.find().lean().exec();
        return res.status(200).send(userdata)
    }catch(err){
        console.log({message:err.message})
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const userdata=await userData.findById(req.params.id)
        return res.status(200).send(userdata)
    }catch(err){
        console.log({message:err.message})
    }
});
// router.get("/:number",async(req,res)=>{
//     try{
//         const userdata=await userData.find({"number":req.params.number})
//         return res.status(200).send(userdata)
//     }catch(err){
//         console.log({message:err.message})
//     }
// });

router.post("",async(req,res)=>{
   
      try{
        const userdata= await userData.create(req.body);
        return res.status(200).send(userdata)
      }catch(err){
          return res.status(401).send({message:err.message})
      }
});

router.patch("/:id",async(req,res)=>{
    try{
        const userdata= await userData.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({message:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const userdata= await userData.findByIdAndDelete(req.params.id);
        return res.status(200).send(userData)
      }catch(err){
          return res.status(401).send({message:err.message})
      }
})


module.exports=router;