import  React ,{PureComponent} from 'react'
import  {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutSubmit} from '../../redux/user/user.redux'
import {Result,List,Brief,WhiteSpace,Button,Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'

const alert = Modal.alert;

@connect(
    state=>state.user,
    {logoutSubmit}
)
class User extends PureComponent {

    logout=()=>{
        alert('注销', '是否退出登录 ', [
            { text: '取消', onPress: () => console.log('取消'), style: 'default' },
            { text: '退出', onPress: () =>{
                    browserCookie.erase('userid');
                    this.props.logoutSubmit()
                }},
        ]);
    }
    render(){

       const props = this.props;
        const Item = List.Item
        const Brief = Item.Brief
        return props.user?(
            <div>
                <Result
                    img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width:50}} alt="" />}
                    title={this.props.user}
                    message={props.type==='sell'?props.compnay:null}
                />
               <List renderHeader={()=>'简介'}>
                   <Item multipleLine>
                       {props.title}
                       {props.desc.split('\n').map(v=>  <Brief key={v}>{v}</Brief>)}
                       {props.money? <Brief >注资：{props.money}</Brief>:null}
                   </Item>
               </List>
                <WhiteSpace />
                <List>
                    <Item>
                        <Button type={'primary'} onClick={this.logout}>退出登录</Button>
                    </Item>
                </List>
            </div>
        ):<Redirect to={props.redirectTo} />
    }
}
export default User;