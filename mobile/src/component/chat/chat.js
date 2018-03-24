import  React ,{PureComponent} from 'react'
import {List,InputItem,NavBar} from 'antd-mobile'
import {connect} from 'react-redux';
import {getMsgList,sendMsg,recvmsg} from "../../redux/chart/chat.redux";


@connect(
    state=>state,
    {getMsgList,sendMsg,recvmsg}
)
class Chat extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            text:'',
            msg:[]
        }
    }
    componentDidMount(){
        this.props.getMsgList()
        this.props.recvmsg()
    }
    handleSubmit(){
        const from = this.props.user._id;
        const to = this.props.match.params.user;
        const msg = this.state.text
        this.props.sendMsg({from,to,msg})
        this.setState({text:''})
    }
    render(){
        const user = this.props.match.params.user;
        const Item = List.Item;
        return(
          <div id="chat-page">
              <NavBar model={'dark'}>{user}</NavBar>
              {this.props.chat.chatmsg.map(v=>{
                  return v.from===user?(
                      <List key={v.id}>
                          <Item>
                              {v.content}
                          </Item>
                      </List>
                  ):(
                      <List key={v.id}>
                          <Item
                              extra={'avatar'}
                              className={'chat-me'}
                          >
                              {v.content}
                          </Item>
                      </List>
                  )


               })}
              <div className={'stick-footer'}>
                  <List>
                      <InputItem
                          placeholder="请输入"
                          value={this.state.text}
                          onChange={v=>{
                              this.setState({text:v})
                          }}
                          extra={<span  onClick={()=>this.handleSubmit()}>发送</span>}
                      />
                  </List>
              </div>
          </div>
        )
    }
}
export default Chat