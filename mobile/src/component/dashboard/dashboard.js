import React ,{PureComponent} from 'react';
import  {Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { NavBar, Icon,TabBar  } from 'antd-mobile';
// import  {Redirect} from 'react-router-dom'

import NavLink from '../navlink/navlink'
import Sell from '../../container/sell/sell'
import Buy from '../../container/buy/buy'
import User from '../user/user'
// function hs(){
//     console.log("123")
// }
// function wh(fn){
//     console.log('123aaa')
//     fn()
//     console.log("last fn")
// }
// console.log(1)
// hs= wh(hs);

function Msg(){
    return <h1>Msg</h1>
}

@connect(
    state=>state,
)
class Dashboard extends PureComponent{


    render(){
        const user = this.props.user;
        const {pathname}=this.props.location;
        const navList = [
            {
                path:'/sell',
                text:'买家',
                icon:'sell',
                title:'买家列表',
                component:Sell,
                hide:user.type=='buy'
            },
            {
                path:'/buy',
                text:'卖家',
                icon:'buy',
                title:'卖家列表',
                component:Buy,
                hide:user.type=='sell'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]
        return(
            <div>
                <NavBar
                    className='fixd-header'
                    mode="dark" >
                    {navList.find(v=>(v.path==pathname).title)}
                </NavBar>
                <div className="contens">
                    <Switch>
                        {navList.map(v=>(
                            <Route
                                key={v.text}
                                path={v.path}
                                component={v.component}
                            />
                        ))}
                    </Switch>
                </div>
                <NavLink data={navList}/>
            </div>
        )
    }
}
export default Dashboard;