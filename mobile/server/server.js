const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./user');
const model = require('./model');
const User = model.getModel('user')
const Chat = model.getModel('chat')
const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection',function(socket){
    socket.on('sendmsg',function(data){
        const {from ,to ,msg }=data;
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg},function(err,doc){
            io.emit('recvmsg',Object.assign({},doc._doc))
        })
        // console.log(data)
        // io.emit('recvmsg',data)//发送到全局
    })
})


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter);
server.listen(9000,function(){
    console.log('Node App start 9000')
});

