import  React ,{PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {Button,Radio,List,InputItem,WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux';
import  {register} from '../../redux/user/user.redux'
import Logo from '../../component/logo/logo'
import  Alltols from '../../component/Alltools/alltools'

const RadioItem = Radio.RadioItem;

@connect(
    state=>state.user,
    {register}
)
@Alltols
class Register extends PureComponent{
    constructor(props){
        super(props)

    }
 componentDidMount(){
        this.props.handleChange('type','buy')
 }
    registers=()=>{
        this.props.register(this.props.state)
    }
    render(){
        return(
            <div>
                {this.props.redirectTo?<Redirect  to={this.props.redirectTo}/>:null}
                <Logo />
                {this.props.msg?<p className='errorMsg' style={{color:"#f50"}}>{this.props.msg}</p>:null}
                <List>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.props.handleChange('user',v)}>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.props.handleChange('pwd',v)} type="password">密码</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.props.handleChange('regpwd',v)} type="password">确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem  onChange={()=>this.props.handleChange('type','buy')} checked={this.props.state.type=='buy'}>
                        买家
                    </RadioItem>
                    <RadioItem onChange={()=>this.props.handleChange('type','sell')}  checked={this.props.state.type=='sell'}>
                        卖家
                    </RadioItem>
                    <WhiteSpace />
                    <Button type={'primary'} onClick={this.registers}>立即注册</Button>
                </List>
            </div>
        )
    }
}
export default Register;