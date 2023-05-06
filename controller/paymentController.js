const Rozorpay=require("razorpay")
var crypto=require('crypto')
const KEY_ID="rzp_test_dOWrhW1NQHYBzk"
const KEY_SECRET="8HFNREx6liHUzbMnwCimF4rq"
module.exports.orders=(req,res)=>{
   
    var instance=new Rozorpay({key_id:KEY_ID,key_secret:KEY_SECRET})
  
    var options={
        amount:req.body.amount*100,
        currency:"INR",
    }

    instance.orders.create(options,(err,order)=>{
        if(err){
            return res.send({code :500,message:"server error"})
        }
        return res.send({code:200,message:"order created",data:order})
    })

  
}


module.exports.verify=(req,res)=>{

    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    var expectedSignature= crypto.createHmac("sha256",KEY_SECRET)
    .update(body.toString())
    .digest('hex')

    var response={"signatureIsValid":"false"}
    if(expectedSignature===req.body.response.razorpay_signature)
    response={"signatureIsValid":"true"}   
    res.send(response);

}