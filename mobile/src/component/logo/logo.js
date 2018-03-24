import  React ,{PureComponent } from 'react'
import  IMG from "../../static/img/login.jpg";
class Logo extends PureComponent {

    render(){
        return(
            <div style={{textAlign:"center"}}>
                <img src={IMG} alt="" style={{width:"50%",height:"180px",borderRadius:"50%",marginTop:"50px"}}/>
            </div>
        )
    }
}
export default Logo;