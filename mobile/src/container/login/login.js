import  React ,{PureComponent } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {Button,List,InputItem,WhiteSpace,WingBlank} from 'antd-mobile'
import  {login} from '../../redux/user/user.redux'
import Logo from '../../component/logo/logo'
import  Alltols from '../../component/Alltools/alltools'



@connect(
    state=>state.user,
    {login}
)
@Alltols
class Login extends PureComponent {
    constructor(props){
        super(props)
    }
    register=()=>{
        this.props.history.push('/register')
    }

    logins=()=>{
        this.props.login(this.props.state);
    }
    render(){
        return(
            <div>
                {this.props.redirectTo&&this.props.redirectTo!=='/login'?<Redirect  to={this.props.redirectTo}/>:null}
                <Logo />
                {this.props.msg?<p className='errorMsg' style={{color:"#f50"}}>{this.props.msg}</p>:null}
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            onChange={v=>this.props.handleChange('user',v)}
                        >用户</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange={v=>this.props.handleChange('pwd',v)} type="password"
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.logins}>登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.register}>立即注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login;