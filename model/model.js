const mongoose=require("mongoose")

 

const ecommerceSchema=new mongoose.Schema({ 
        catagory: String,
        name: String,
        image: String,
        price: String,
        oPrice: String   
    
})
const ecommerceData=mongoose.model("eecommerceData",ecommerceSchema)


module.exports={ecommerceData}