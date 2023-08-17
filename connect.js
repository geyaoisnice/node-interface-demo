// var mysql      = require('mysql');
// var pool = mysql.createPool({
//   host     : '121.5.149.205',
//   user     : 'nodedemo',
//   password : '655442',
//   database : 'nodedemo'
// });
const mysql = require('mysql');

const pool = mysql.createPool(require("./config").dev);
pool.on('connection', (connection) => {
    //logger.info("connection!");
});

pool.on('enqueue', () => {
    //logger.info('Waiting for available connection slot');
});

module.exports.Pool = pool;
var query=(sql,params,callback)=>{
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
 };

// let sql="select * from t_student"
// let params=[]
// query(sql,params,function(result){
//     console.log(result)
// })
module.exports.query;