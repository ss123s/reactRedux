import React ,{PureComponent} from 'react';
import {Grid,List} from 'antd-mobile'
class Avatar extends PureComponent{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                .split(',')
                .map(v=>({
                    icon:require(`../img/${v}.png`),
                    text:v
                }))
        const NowImg = this.state.icon ? (<div>
                                    <span>当前头像</span>
                                             <img style={{width:20}} src={this.state.icon} alt=""/>
                                </div>):'请选择头像';
        return(
            <div>
                <List renderHeader={()=>NowImg}>
                    <Grid
                        columnNum={5}
                        data={avatarList}
                        onClick={elm=>{
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    />
                </List>
            </div>
        )
    }
}
export default Avatar;