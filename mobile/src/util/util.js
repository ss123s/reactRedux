
/*
* 根据用户信息返回跳转地址
* user.type    /sell /buy
* user.avatar   /sellInfo  /buyInfo
* */
export function getRedirectPath({type,avatar}){
    let url = (type==='sell')?'/sell':'/buy'
    if(!avatar){
        url += 'info'
    }
    return url
}