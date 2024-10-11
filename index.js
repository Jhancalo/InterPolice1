const express=require("express")
const cors=require("cors")


const app=express()
app.use(cors())


app.listen(4100,()=>{

    app.use(express.json())

console.log("npServer running in : 4100")


})