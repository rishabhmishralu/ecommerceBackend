const express=require("express")
const controller=require("../controller/controller")
const paymentController =require("../controller/paymentController")
const userController=require("../controller/userController")

const ProductController=require("../controller/productController")
const router=express.Router()




router.get("/data",controller.getEcommerce)  

router.post("/product",ProductController.addProduct)
router.get("/product",ProductController.getProducts)

router.post("/signup",userController.signup)
router.post("/login",userController.login)

router.post("/addtodb",userController.addtodb)  //add to db 
router.post("/gettodb",userController.gettodb)  //get to db

router.post("/order",paymentController.orders)
router.post('/verify',paymentController.verify)

module.exports=router;