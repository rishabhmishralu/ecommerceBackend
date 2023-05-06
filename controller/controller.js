const { ecommerceData } = require("../model/model")

const getEcommerce=async(req,res)=>{
  try{
  
    const result=await ecommerceData.find()
    res.send(result)
  }
  catch{
    console.log("err in find ecommerce data")
  }
}

module.exports={getEcommerce}