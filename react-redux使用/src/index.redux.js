

//定义常量
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

//reducer
export function counter(state=0,action){
    switch (action.type){
        case ADD_GUN:
            return state +1
        case  REMOVE_GUN:
            return state -1
        default:
            return 10
    }
}

//定义两个函数专门来处理state


export function addGUN(){
    return {type:ADD_GUN}
}
export function removeGUN(){
    return {type:REMOVE_GUN}
}
export function setGun(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGUN())
        },2000)
     }
}