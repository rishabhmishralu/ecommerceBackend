const mongoose=require("mongoose")

const url=`mongodb+srv://${process.env.ussrname}:${process.env.password}@ecommerce.qfis9jg.mongodb.net/?retryWrites=true&w=majority`


const connect=async()=>{
    try{
         await mongoose.connect(url)
         console.log("connected")
    }
    catch(err){
        console.log(err)
    }
   
}

module.exports=connect;