import React from 'react';
import {connect} from 'react-redux';
import {login,getData} from './Auth.redux'

import {Redirect} from 'react-router-dom'


@connect(
    state=>state.auth,
    {login,getData}
)

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datas:{}
        }
    }
    componentDidMount(){
       this.props.getData()
    }
    render(){
        console.log( this.state.datas.user)
    return(
        <div>
            {this.props.isAuth?<Redirect to={'/dashboard'}/>:null}
            <h1>您没有权限需要登录{this.props.user} </h1>
            <br/>

            <button onClick={this.props.login}>
                登录
            </button>
        </div>
    )
}}
export default Login;
