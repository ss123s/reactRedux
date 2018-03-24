import {combineReducers} from 'redux';
import {user} from '../redux/user/user.redux'
import {chartUser} from '../redux/chart/chartuser.redux'
import {chat} from '../redux/chart/chat.redux'
export default combineReducers({user,chartUser,chat})