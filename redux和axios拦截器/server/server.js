const express = require('express');
const mongoose = require('mongoose');
//链接mongoDB  并且使用 *** 集合
const DB_URL = 'mongodb://localhost:27017/muxiaobai'

mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
/*类似mysql 文档 字段的概念  非关系型数据库*/
/*connect链接数据库
* 定义文档模型 Schema 和model新建模型
* 文档类型，String,Number等数据结构  定create,removev,update分别用来增删改操作
* Find和findOne用来查询数据
* */
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
 //1. 创建数据
// User.create({
//     user:'aa',
//     age:16,
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err);
//     }
// })
//2.删除所有age:18的数据
// User.remove({age:22},function(err,doc){
//     console.log(doc);
// })
// 3.更新并修改某个字段值
// User.update({user:'aa'},{'$set':{age:22}},function(err,doc){
//     if(!err){
//         console.log(doc);
//     }
// })


//    新建app
const app = express();
//路径， 函数请求
app.get('/',function(req,res){
    res.send(`<h1>Tolist Hah</h1>`)
})
//返回内容不同 文本send json 文件
//返回接口类型不同 get  post
app.get('/data',function(req,res){
    User.findOne({user:'aa'},function(err,doc){
        res.json(doc)
    })
})
app.listen(9000,function(){
    console.log('Node App start 9000')
});

