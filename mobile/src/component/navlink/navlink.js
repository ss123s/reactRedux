import React ,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import { TabBar  } from 'antd-mobile';
@withRouter
class NavLink extends PureComponent{
    static propTypes = {
        data:PropTypes.array.isRequired
    }
    render(){
        const navList = this.props.data.filter(v=>!v.hide);
        const {pathname} = this.props.location;
        return(
            <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
                <TabBar>
                    {navList.map(v=>(
                        <TabBar.Item
                            key={v.path}
                            title={v.text}
                            icon={{uri:require(`./img/${v.icon}.png`)}}
                            selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
                            selected={pathname===v.path}
                            onPress={()=>{
                                this.props.history.push(v.path)
                            }}
                        >
                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>
        )
    }
}
export default NavLink;