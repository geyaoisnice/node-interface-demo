const express=require("express")

const server=express()

server.use("/api",require("./router"))

server.listen(8080,()=>{
    console.log("服务器启动完毕")
})