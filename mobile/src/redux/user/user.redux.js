import  axios from 'axios';
import  {getRedirectPath} from '../../util/util'

const  ERR_MSG = 'ERR_MSG'  //登录或注册失败
const LoadData = 'LoadData'
const AUTH_SUCCESS = 'AUTH_SUCCESS' //验证信息成功
const LOGOUT = 'LOGOUT'
//初始状态
const initState={
    redirectTo:'',
    msg:'',
    user:'',
    pwd:'',
    type:''
}

//reducers
export function user(state=initState,action){
    switch (action.type){
        case AUTH_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.paylod),isAuth:true,...action.paylod}
        case LoadData:
            return {...state,...action.paylod}
        case ERR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        case  LOGOUT:
            return {...initState,redirectTo:'/login'}
        default:
            return state
    }
}
/*统一处理验证函数*/
function authSuccess(datas){
    const {pwd,...data} = datas
    return {type:AUTH_SUCCESS,paylod:data}
}
function errorMsg(msg){ //处理错误信息
    return {msg,type:ERR_MSG}
}


export function updates(data){ //更新数据
    return dispatch=>{
        axios.post('/user/update',data)
            .then(res=>{
                if(res.status==200 && res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
export function logoutSubmit(){
    return {type:LOGOUT}
}
export function loadDatas(userinfo){//用户信息传递
    return {type:LoadData,paylod:userinfo}
}
export  function login({user,pwd}){
    if(!user || !pwd){
        return errorMsg('用户名密码必须输入')
    }
    return dispatch=>{
        axios.post('/user/login',{user,pwd})
            .then(res=>{
                if(res.status==200 && res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
export  function register({user,pwd,regpwd,type}){ // 注册处理校验和数据异步请求
    if(!user || !pwd || !type){
        return errorMsg("用户名密码必须输入")
    }
    if(pwd!==regpwd){
        return errorMsg('密码不同')
    }
    return dispatch=>{
        axios.post('/user/register',{user,pwd,type})
            .then(res=>{
                if(res.status==200&&res.data.code===0){
                    dispatch(authSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }

}
