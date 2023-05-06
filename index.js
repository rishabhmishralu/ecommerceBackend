const env=require("dotenv")
env.config({path:".env"})
const express=require("express")
const bodyParser=require("body-parser")

const connect=require("./config/db")
const route=require("./routes/route")
const cors=require("cors")

const app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.json())
app.use(cors({
    origin:"*"
}))



app.use(route)



app.listen(`${process.env.port}`,async()=>{
    console.log("port is working")
    await connect()
})