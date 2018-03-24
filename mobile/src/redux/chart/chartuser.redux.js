import axios from 'axios';

const UserList = 'UserList' //定义识别参数
const initState={//初始化
    userlist : []
}

export  function chartUser(state=initState,action){
    switch(action.type){
        case UserList:
            return {...state,userlist:action.paylod}
        default:
            return state
    }
}


function userList(data){//获取数据
    return {type:UserList,paylod:data}
}

export function getUserList(type){//获取type并传递数据给userList函数
    return dispatch=>{
        axios.get('/user/list?type='+type)
            .then(res=>{
                if(res.data.code===0){
                  dispatch(userList(res.data.data))
                }
            })
    }
}
