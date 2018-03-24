
const express = require('express');
const utils = require('utility');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user')
const Chat = model.getModel('chat')
//统一查询条件
const _filter = {'pwd':0,'__v':0}

//清除所有密码  User.remove({},function(e,d){})
Router.get('/list',function(req,res){
    const {type} =req.query
    // User.remove({},function(e,d){})
    User.find({type},function(err,doc){
        console.log(doc)
        console.log(doc.company)
        return res.json({code:0,data:doc});
    })
})
Router.get('/getMsgList',function(req,res){
    const user = req.cookies.user;
    //{'$or':[{from:user,to:userid}]}
    // Chat.remove({},function(e,d){})
    Chat.find({},function(err,doc){
        if(!err){
            return res.json({code:0,msgs:doc})
        }
    })
})
Router.post('/update',function(req,res){
    const userid = req.cookies.userid;
    if(!userid){
        return json.dumps({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid,body,function(err,doc){//id,数据，处理函数
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)
        return res.json({code:0,data})
    })
})

Router.post('/login',function(req,res){
    const {user,pwd} =req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            return res.json({code:1,msg:"用户名或密码不正确"})
        }
        res.cookie('userid',doc._id);
        return res.json({code:0,data:doc})
    })
})
Router.post('/register',function(req,res){
    const {user,type,pwd} =req.body
    User.findOne({user:user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名已存在'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save(function(err,doc){
            if(err){
                return res.json({code:1,msg:'服务器错误！'})
            }
            const {user,type,_id} = doc
            res.cookie('userid',_id)
         return res.json({code:0,data: {user,type,_id}})
        })
    })
})

Router.get('/info',function(req,res){
    //获取cookie
    const {userid} = req.cookies
    if(!userid){
        //用户有没有cookie
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            return res.json({code:1,msg:'服务器错误'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }

    })

})
function md5Pwd(pwd){
    const salt = 'saldkfjsl;dfj;ls*7ujkhklh';
    return utils.md5(utils.md5(pwd+salt));
}
module.exports = Router;