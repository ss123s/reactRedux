import  React ,{PureComponent } from 'react'
import  axios from 'axios'
import {loadDatas} from '../../redux/user/user.redux'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
/*
        *   获取用户信息
        *是否登录
        * 现在的url的地址 login不需要跳转的，
       * 用户的type 身份是买家还是卖家
       * 用户和信息是否完善
       * 没有完善继续完善 ，头像个人简介
       *
       * */
const {Fragment} =React;
@withRouter
@connect(
    null,
    {loadDatas}
)
class AuthRouter extends PureComponent{
    componentDidMount(){
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        axios.get('/user/info')
            .then(res=>{
                if(res.status==200){
                    if(res.data.code==0){
                    //    有登录信息的
                        this.props.loadDatas(res.data.data)
                    }else{
                        this.props.history.push('/login')
                    }
                }
            })
    }
    render(){
        return(
            <Fragment><div></div></Fragment>
        )
    }
}
export default  AuthRouter;