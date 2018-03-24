import React ,{PureComponent} from 'react';
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chart/chartuser.redux'
import {Card,WingBlank} from 'antd-mobile'

@connect(
    state=>state.chartUser,
    {getUserList}
)
class Sell extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.props.getUserList('buy')
    }
    headleClick(v){
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        const Header = Card.Header
        const Bodys = Card.Body;
        return(
            <div>
                <WingBlank>
                    {this.props.userlist.map(v=>(
                        v.avatar?<Card
                            key={v.user}
                            onClick={()=>this.headleClick(v)}
                        >
                            <Header
                                title={v.user}
                                thumb={require(`../../component/img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            />
                            <Bodys>{v.desc}</Bodys>
                        </Card>:null
                    ))}
                </WingBlank>
            </div>
        )
    }
}
export  default  Sell;