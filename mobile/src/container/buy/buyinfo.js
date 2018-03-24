import React ,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import {NavBar,InputItem,Button,TextareaItem,WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux';
import Avatar from '../../component/avatar/avatar'
import {updates} from '../../redux/user/user.redux'
@connect(
    state=>state.user,
    {updates}
)
class BuyInfo extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            title:'',
            desc:''
        }
    }
    showlow(key,val){
        this.setState({
            [key]:val
        })
    }

    render(){
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return(
            <div>
                {redirect&& redirect!==path?<Redirect to={this.props.redirectTo}/>:null}
                <NavBar mode={'dark'}>卖家完善信息页</NavBar>
                <WhiteSpace />
                <Avatar
                    selectAvatar={(imgname)=>{
                        this.setState({
                            avatar:imgname
                        })
                    }}
                />
                <WhiteSpace />
                <InputItem onChange={(v)=>this.showlow('title',v)}>
                    买家名称
                </InputItem>
                <TextareaItem
                    autoHeight
                    title={'个人简介'}
                    onChange={(v)=>this.showlow('desc',v)}>
                </TextareaItem>
                <WhiteSpace />
                <Button type={'primary'} onClick={()=>{
                    this.props.updates(this.state)
                }}>保存</Button>
            </div>
        )
    }
}
export default BuyInfo;