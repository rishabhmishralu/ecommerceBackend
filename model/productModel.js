const mongoose =require("mongoose")
const {Schema}=mongoose


const productSchema=new Schema({
 
id:Number,
catagory:String,
name:String,
ratting:String,
image:{type: String},
price:Number,
oPrice:String

})

module.exports=mongoose.model("productdata",productSchema)
