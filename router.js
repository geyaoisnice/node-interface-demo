const express=require("express")
const router=express.Router();
const db=require("./mysql")


router.get("/getStudent",async(resquest,response,next)=>{
    let sex=resquest.query.sex;
    let params=[sex]
    let sql="SELECT * FROM t_student WHERE sex?;"
    let result=await db.query(sql,params)
    response.json(result)
})

router.get("/getStudentPage",async(resquest,response,next)=>{
    let pageSize=resquest.query.pageSize==undefined?5:resquest.query.pageSize;
    let pageIndex=request.query.pageIndex==undefined?1:request.query.pageIndex
  
   let params=[(pageIndex-1)*pageSize,pageSize]
   let sql="SELECT * FROM t_student LIMIT ?,?;";
    response.json(result)
    let result=await db.query(sql,params)
    response.json({
        code:"200",
        data:result,
        msg:"查询成功"
    })
})
module.exports=router