import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logout} from "./Auth.redux";

@connect(
    state=>state.auth,
    {logout}
)


class Dash extends React.Component{

    render(){
        const redirectTologin = <Redirect to="/login" />
        const apps = (
            <div>
                <button onClick={this.props.logout}>注销</button>
                dashborder
            </div>
        );
    return  this.props.isAuth?apps:redirectTologin


}}
export default Dash;