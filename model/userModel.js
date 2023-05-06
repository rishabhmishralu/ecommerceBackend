const mongoose= require('mongoose')
const product=require("../model/model")

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    mobile:Number,
    cart:[{ type: mongoose.SchemaTypes.ObjectId,ref:'eecommerceData'}]
    
})

module.exports=mongoose.model("Userdetails",userSchema)