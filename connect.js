var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'xxxx',
  user     : 'nodedemo',
  password : '655442',
  database : 'nodedemo'
});
 const query=(sql,params,callback)=>{
   pool.getConnection((err,conn)=>{
       if(err){
        console.log("连接mysql失败")
        pool.releaseConnection()
       }
       conn.query(sql,params,(err,result,fields)=>{
        // 释放连接
        if(err){
            conn.release()
            console.log("执行sql失败")
            return
        }
        console.log(result)
        callback(result,fields)
        conn.release()
       })
   })
 }

let sql="select * from t_student"
let params=[]
query(sql,params,function(result){
    console.log(result)
})