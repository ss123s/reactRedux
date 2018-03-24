import axios from 'axios';
const Login = 'LOGIN'
const Logout = 'LOGOUT'
const UserData = 'UserData'

const initState={
    isAuth:false,
    user:"muxiaoba",
    age:"20",

}
export function auth(state=initState,action){
    switch (action.type){
        case Login:
            return {...state,isAuth:true}
        case Logout:
            return {...state,isAuth:false}
        case UserData:
            return {...state,user:action.paylod.user,age:action.paylod.age}
        default:
            return state
    }
}
export  function getData(){
    //手动派发数据
    return dispatch=>{
        axios.get('/data')
            .then((res)=>{
                if(res.status==200){
                    dispatch(userData(res.data))
                }
            })

    }
}
export function userData(data){
    return {type:UserData,paylod:data}
}
export function login(){
    return {type:Login}
}

export function logout(){
    return {type:Logout}
}