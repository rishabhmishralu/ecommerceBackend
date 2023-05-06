const productModel = require("../model/productModel")


module.exports.addProduct=async(req,res)=>{

    const data=req.body
    console.log(data,"5")
    // res.send("add product")

   const newProduct=new productModel(data)
  const issaved= await newProduct.save()
  if(issaved){
    res.send("save")
  }
  else{
    res.send("faail to save")
  }
      
}


module.exports.getProducts=async(req,res)=>{
    const data=await productModel.find({})
    if(data.length>0){
        res.send(data)
        console.log(data)
    }
    else{
        res.send("find is not sucess")
    }

}